#Import packages
import pandas as pd # read_csv
import os, re
import matplotlib.pyplot as plt
import numpy as np

pd.set_option('display.max_rows', 10)
pd.set_option('display.max_columns', None)
pd.set_option('display.max_colwidth', None)

#Load data
# df1=pd.read_csv("C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/wimbledon_mens_2024.csv")
df1=pd.read_csv("C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/wimbledon_mens_2023.csv")
df_order=pd.read_csv("C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/2023-wimbledon-matches.csv")



# df2 Match Scores data cleaning

df2=df1.loc[:, ['Round', 'Winner', 'Loser', 'W1', 'W2', 'W3', 'W4', 'W5', 'L1', 'L2', 'L3', 'L4', 'L5']]

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
        
 # Reformat player names to first initial. last name of the match results csv
for i in range(0, len(df2)):
    player1 = df2.loc[i, 'Winner']
    player2 = df2.loc[i, 'Loser']
    fname1 = re.search(r'\s\w+\.\w*.?', player1)
    lname1 = re.sub(r'\s\w+\.\w*.?', '',player1)
    fname2 = re.search(r'\s\w+\.\w*.?', player2)
    lname2 = re.sub(r'\s\w+\.\w*.?', '',player2)

    if player1 == ''
    df2.loc[i, 'Winner'] = f'{fname1.group().strip()} {lname1}'
    df2.loc[i, 'Loser'] = f'{fname2.group().strip()} {lname2}'


# Rename columns for df2 and add new Winner column
df2.rename(columns={'Winner' : 'player1', 'Loser' : 'player2', 'W1' : 'P1_1', 'W2' : 'P1_2', 'W3' : 'P1_3', 'W4' : 'P1_4', 'W5' : 'P1_5', 'L1' : 'P2_1', 'L2' : 'P2_2', 'L3' : 'P2_3', 'L4' : 'P2_4', 'L5' : 'P2_5'}, inplace=True)
df2['Winner'] = df2['player1']


# df_order Tournament Draw data cleaning

df_order = df_order.loc[:, ['match_num', 'player1', 'player2']]

# Reformat player names to first initial. last name of the draw order csv
player_hardcoded_names = ['Marc Andrea Huesler']

for i in range(0, len(df_order)):

    player1 = df_order.loc[i, 'player1']
    player2 = df_order.loc[i, 'player2']

    if player1 == 'Marc Andrea Huesler':
        df_order.loc[i, 'player1'] = 'M.A. Huesler'
        if bool(re.search(r'\.{1,2}', player2)):
            fname2 = re.search(r'\w+.{1,2}', player2)
        else:
            fname2 = re.search(r'\w', player2)
        #grab last names and finish renaming
        lname2 = re.search(r'\s.*', player2)
        df_order.loc[i, 'player2'] = f'{fname2.group()}.{lname2.group()}'
    elif player2 == 'Marc Andrea Huesler':
        df_order.loc[i, 'player2'] = 'M.A. Huesler'
        if bool(re.search(r'\.{1,2}', player1)):
            fname1 = re.search(r'\w+.{1,2}', player1)
        else:
            fname1 = re.search(r'\w', player1)
        #grab last names and finish renaming
        lname1 = re.search(r'\s.*', player1)
        df_order.loc[i, 'player1'] = f'{fname1.group()}.{lname1.group()}'
    else:
        # Check for periods in player names suchs as J.J. Wolf
        if bool(re.search(r'\.{1,2}', player1)):
            fname1 = re.search(r'\w+.{1,2}', player1)
        else:
            fname1 = re.search(r'\w', player1)
        if bool(re.search(r'\.{1,2}', player2)):
            fname2 = re.search(r'\w+.{1,2}', player2)
        else:
            fname2 = re.search(r'\w', player2)
        #grab last names and finish renaming
        lname1 = re.search(r'\s.*', player1)
        lname2 = re.search(r'\s.*', player2)
        df_order.loc[i, 'player1'] = f'{fname1.group()}.{lname1.group()}'
        df_order.loc[i, 'player2'] = f'{fname2.group()}.{lname2.group()}'
    

    



df2
df_order

# df2[df2.Winner == 'N. Jarry']


# left_merged = pd.merge(df_order, df2, how='left', on=['player1', 'player2'])
# left_merged.shape
# df2.shape
# df_order.shape

# left_merged.sort_values(by=['match_num'])

# To capture instances where the winner is player2 and not player 1, switch up all the columns and do a 2nd merge with the new dataset
df2_reverse = df2.rename(columns={'player1' : 'player2', 'player2' : 'player1', 'P1_1' : 'P2_1', 'P1_2' : 'P2_2', 'P1_3' : 'P2_3', 'P1_4' : 'P2_4', 'P1_5' : 'P2_5', 'P2_1' : 'P1_1', 'P2_2' : 'P1_2', 'P2_3' : 'P1_3', 'P2_4' : 'P1_4', 'P2_5' : 'P1_5'})
# df2_reverse = df2_reverse.loc[:, ['player1', 'player2', 'P1_1', 'P1_2', 'P1_3', 'P1_4', 'P1_5', 'P2_1', 'P2_2', 'P2_3', 'P2_4', 'P2_5', 'Winner']]
df2_reverse

# Try to concatenate df2 and df2_reverse by rows (axis = 0 the default) and then merge
concatenated = pd.concat([df2, df2_reverse])
concatenated

left_merged_2 = pd.merge(df_order, concatenated, how='left', on=['player1', 'player2'])
left_merged_2.shape
left_merged_2.sort_values(by=['match_num'])

left_merged_2.to_csv('sample_data_2.csv', index=True)






# df2 regex
player1 = 'Wolf J.J.'
player1 = 'De Minaur A.'
player1 = 'Huesler M.A.' # result M.A. Huesler


firstname1 = re.search(r'\s\w+\.\w*.?', player1)
firstname1.group().strip()

lastname1 = re.sub(r'\s\w+\.\w*.?', '',player1)
lastname1

# df_order regex 
player2 = 'J.J. Wolf'
player2 = 'Alex De Minaur'
player2 = 'Ben Shelton'
player2 = 'Marc Andrea Huesler' # result M. Andrea Huesler

bool(re.search(r'\.{1,2}', player2)) # true/false check for periods in the name
firstname2 = re.search(r'\w+.{1,2}', player2) # true
firstname2 = re.search(r'\w', player2) # false
firstname2.group().strip()

lastname2 = re.search(r'\s.*', player2)
lastname2.group()


os.chdir(r"C:\Users\blue_\Documents\Kaggle\Web Development\Tennis-VPN-React\data")
os.getcwd()
df2.to_csv('sample_data.csv', index=True)


