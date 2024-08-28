#Import packages
import pandas as pd # read_csv
import os
import re
# import matplotlib.pyplot as plt
# import numpy as np

pd.set_option('display.max_colwidth', None)

#Load data
df1=pd.read_csv("C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/wimbledon_mens_2024.csv")
df_order=pd.read_csv("C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/2023-wimbledon-matches.csv")

df1.iloc[:,[7,9,10]]
df2=df1.loc[:, ['Round', 'Winner', 'Loser', 'W1', 'W2', 'W3', 'W4', 'W5', 'L1', 'L2', 'L3', 'L4', 'L5']]

df_order = df_order.loc[:, ['match_num', 'player1', 'player2']]

# Relabel rounds to integers 1-7
for i in range(0, len(df2)):
    if df2.loc[i, 'Round']== '1st Round':
        df2.loc[i, 'Round'] = 1
    elif df2.loc[i, 'Round'] == '2nd Round':
        df2.loc[i, 'Round'] = 2
    elif df2.loc[i, 'Round'] == '3rd Round':
        df2.loc[i, 'Round'] = 3
    elif df2.loc[i, 'Round'] == '4th Round':
        df2.loc[i, 'Round'] = 4
    elif df2.loc[i, 'Round'] == 'Quarterfinals':
        df2.loc[i, 'Round'] = 5
    elif df2.loc[i, 'Round'] == 'Semifinals':
        df2.loc[i, 'Round'] = 6
    elif df2.loc[i, 'Round'] == 'The Final':
        df2.loc[i, 'Round'] = 7
        
# Reformat player names to first initial. last name
for i in range(0, len(df_order)):
    player1 = df_order.loc[i, 'player1']
    player2 = df_order.loc[i, 'player2']
    fname1 = re.search(r'\w', player1)
    lname1 = re.search(r'\s\w+', player1)
    fname2 = re.search(r'\w', player2)
    lname2 = re.search(r'\s\w+', player2)
    df_order.loc[i, 'player1'] = f'{fname1.group()}.{lname1.group()}'
    df_order.loc[i, 'player2'] = f'{fname2.group()}.{lname2.group()}'


df_order

    
os.chdir(r"C:\Users\blue_\Documents\Kaggle\Web Development\Tennis-VPN-React\data")
os.getcwd()
df2.to_csv('sample_data.csv', index=True)


