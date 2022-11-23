import pandas as pd
import numpy as np
from IPython.display import display

df = pd.read_csv('topMusicJOB.csv', index_col = 0)

df.rename({'Unnamed: 0' : 'id', 'top genre': 'genre'}, axis=1, inplace=True)

json = { 'params':
    {
        'nrgy': 1,
        'dnce': 2,
        'val': 1,
        'pop': 2
    }
}

df_user = pd.DataFrame()

def get_setlist(json, lista):
    key = list(json.keys())[0]
    for k, v in json[key].items():
        if k == 'nrgy':
            if v == 1:
                val_nrgy = 20
            elif v== 2:
                val_nrgy = 40
            elif v== 3:
                val_nrgy = 60
            elif v== 4:
                val_nrgy = 80
            elif v== 5:
                val_nrgy = 100
        elif k == 'dnce':
            if v == 1:
                val_dnce = 20
            elif v== 2:
                val_dnce = 40
            elif v== 3:
                val_dnce = 60
            elif v== 4:
                val_dnce = 80
            elif v== 5:
                val_dnce = 100
        elif k == 'val':
            if v == 1:
                val_val = 20
            elif v== 2:
                val_val = 40
            elif v== 3:
                val_val = 60
            elif v== 4:
                val_val = 80
            elif v== 5:
                val_val = 100
        elif k == 'pop':
            if v == 1:
                val_pop = 20
            elif v== 2:
                val_pop = 40
            elif v== 3:
                val_pop = 60
            elif v== 4:
                val_pop = 80
            elif v== 5:
                val_pop = 100
        else: 
            print('No existe esa petición')

    filtro_nrgy = df['nrgy'].isin(range(val_nrgy-20,val_nrgy+20))
    filtro_dnce = df['dnce'].isin(range(val_dnce-20,val_dnce+20))
    filtro_val = df['val'].isin(range(val_val-20,val_val+20))
    filtro_pop = df['pop'].isin(range(val_pop-20,val_pop+20))

    df_filter = df[filtro_nrgy & filtro_dnce & filtro_val & filtro_pop]
    df_filter = df_filter[['id', 'title', 'artist', 'genre', 'year', 'dur']]

    df_list = pd.concat([lista, df_filter], axis=0, ignore_index=True)
    return  df_list

lista1 = get_setlist(json, df_user)
display(lista1)


duration = lista1['dur'].sum()
duration = duration/60
print('Tu setlist tiene una duración de', duration, 'minutos.')

inpt = input('¿Quieres hacer otra selección y añadirla? (s/n)')
if inpt == 's':
    json['nrgy'] = input('Nivel de energy del 1 al 5')
    json['dnce'] = input('Nivel de danzabilidad del 1 al 5')
    json['val']  = input('Nivel de mood del 1 al 5')
    json['pop']  = input('Nivel de popularidad del 1 al 5')
    
    lista1 = get_setlist(json, lista1)
    display(lista1)

    duration = lista1['dur'].sum()
    duration = duration/60
    print('Tu setlist tiene una duración de', duration, 'minutos.')
    inpt = input('¿Quieres hacer otra selección y añadirla? (s/n)')
else:
    print('¡Disfruta de tu concierto!')
    lista1.to_json('setlist.json', orient='records')

    