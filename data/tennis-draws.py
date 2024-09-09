#Import packages
import pandas as pd # read_csv
import os, re, math
import matplotlib.pyplot as plt
import numpy as np
from json import loads, dumps
import json

pd.set_option('display.max_rows', 20)
pd.set_option('display.max_columns', None)
pd.set_option('display.max_colwidth', None)

os.chdir(r"C:\Users\blue_\Documents\Kaggle\Web Development\Tennis-VPN-React\data")
os.getcwd()

#Load data
# df1=pd.read_csv("C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/wimbledon_mens_2024.csv")
df1=pd.read_csv("C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/wimbledon_mens_2023.csv")
df_order=pd.read_csv("C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/2023-wimbledon-matches.csv")
df_Tiebreak=pd.read_csv("C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/2023-wimbledon-points.csv")


# df2 Match Scores data cleaning
# grab necessary columns
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
        
#################################################################################
# regex testing
#################################################################################
# df2 regex
player1 = 'Wolf J.J.'
player1 = 'De Minaur A.'
player1 = 'Huesler M.A.' # result M.A. Huesler
player1 = 'Zhang Zh.' # result Zh. Zhang
player1 = 'O Connell C.' # C. O Connell
player1 = 'Cerundolo J.M.' # J.M. Cerundolo
player1 = 'Galan D.E.' # D.E. Galan
player1 = 'Barrios M.' # M. Barrios
player1 = 'Varillas J.P.' # J.P. Varillas
player1 = 'Zapata Miralles B.' # B. Zapata Miralles

firstname1 = re.search(r'\s\w+\.\w*.?', player1)
lastname1 = re.sub(r'\s\w+\.\w*.?', '',player1)
print(f'{firstname1.group().strip()} {lastname1}')

# df_order regex 
player2 = 'J.J. Wolf'
player2 = 'Alex De Minaur'
player2 = 'Ben Shelton'
player2 = 'Marc Andrea Huesler' # result M. Andrea Huesler
player2 = 'Zhizhen Zhang' # result Z. Zhang
player2 = "Christopher O'Connell" # C. O'Connell
player2 = 'Juan Manuel Cerundolo' # J. Manuel Cerundolo
player2 = 'Daniel Elahi Galan' # D. Elahi Galan
player2 = 'Tomas Barrios Vera' # T. Barrios Vera
player2 = 'Felix Auger Aliassime'
player2 = 'Juan Pablo Varillas' # J. Pablo Varillas

if bool(re.search(r'\.{1,2}', player2)): # true/false check for periods in the name
    firstname2 = re.search(r'\w+.{1,2}', player2) # true
else:
    firstname2 = re.search(r'\w', player2) # false

lastname2 = re.search(r'\s.*', player2)
print(f'{firstname2.group()}.{lastname2.group()}')
#################################################################################
# regex testing
#################################################################################

# Reformat player names to first initial. last name of the match results csv
player_hardcoded_names1 = ['Zhang Zh.', 'Z. Zhang', 'O Connell C.', "C. O'Connell", 'Barrios M.', 'T. Barrios Vera', 'Mcdonald M.', 'M. McDonald', 'Auger-Aliassime F.', 'F. Auger Aliassime', 'Ramos-Vinolas A.', 'A. Ramos Vinolas']
hardcoded_names1 = np.array(player_hardcoded_names1)

# Reformat player names to first initial. last name of the draw order csv
player_hardcoded_names2 = ['Marc Andrea Huesler', 'M.A. Huesler', 'Juan Manuel Cerundolo', 'J.M. Cerundolo', 'Daniel Elahi Galan', 'D.E. Galan', 'Juan Pablo Varillas', 'J.P. Varillas', 'Tomas Martin Etcheverry', 'T. Etcheverry']
hardcoded_names2 = np.array(player_hardcoded_names2)


for i in range(0, len(df2)):
    player1 = df2.loc[i, 'Winner']
    player2 = df2.loc[i, 'Loser']
    player1_changed = False
    player2_changed = False

    check_player1 = np.array(player1)
    check_player2 = np.array(player2)
    check_match1 = np.where(np.isin(hardcoded_names1, check_player1))[0]
    check_match2 = np.where(np.isin(hardcoded_names1, check_player2))[0]

    if len(check_match1) > 0:
        new_name = check_match1.item() + 1
        player1 = str(hardcoded_names1[new_name])
        df2.loc[i, 'Winner'] = player1
        player1_changed = True

    if len(check_match2) > 0:
        new_name = check_match2.item() + 1
        player2 = str(hardcoded_names1[new_name])
        df2.loc[i, 'Loser'] = player2
        player2_changed = True

    if not player1_changed:
        fname1 = re.search(r'\s\w+\.\w*.?', player1)
        lname1 = re.sub(r'\s\w+\.\w*.?', '',player1)
        df2.loc[i, 'Winner'] = f'{fname1.group().strip()} {lname1}'

    if not player2_changed:
        fname2 = re.search(r'\s\w+\.\w*.?', player2)
        lname2 = re.sub(r'\s\w+\.\w*.?', '',player2)
        df2.loc[i, 'Loser'] = f'{fname2.group().strip()} {lname2}'


# Rename columns for df2 and add new Winner column
df2.rename(columns={'Winner' : 'player1', 'Loser' : 'player2', 'W1' : 'P1_1', 'W2' : 'P1_2', 'W3' : 'P1_3', 'W4' : 'P1_4', 'W5' : 'P1_5', 'L1' : 'P2_1', 'L2' : 'P2_2', 'L3' : 'P2_3', 'L4' : 'P2_4', 'L5' : 'P2_5'}, inplace=True)
df2['Winner'] = df2['player1']

df2.to_csv('sample_data.csv', index=True)


# df_order Tournament Draw data cleaning
df_order = df_order.loc[:, ['match_num', 'player1', 'player2']]

# Reformat player names to first initial. last name of the draw order csv


# arr1 = np.array(player_hardcoded_names)
# hardcoded_names = np.array(player_hardcoded_names)
# arr1
# arr2 = np.array(player1)
# arr2

# res = np.where(np.isin(arr1, arr2))[0]
# print('length is: ', len(res), ' and the matching position is: ', res)

# names_match = arr2 == arr1
# names_match
# np.extract(names_match, arr1)[0]

# player_hardcoded_names.count(player1)
# player_hardcoded_names

df_order.head(10)

for i in range(0, len(df_order)):

    player1 = df_order.loc[i, 'player1']
    player2 = df_order.loc[i, 'player2']
    player1_changed = False
    player2_changed = False

    check_player1 = np.array(player1)
    check_player2 = np.array(player2)
    check_match1 = np.where(np.isin(hardcoded_names2, check_player1))[0]
    check_match2 = np.where(np.isin(hardcoded_names2, check_player2))[0]

    if len(check_match1) > 0:
        new_name = check_match1.item() + 1
        player1 = str(hardcoded_names2[new_name])
        df_order.loc[i, 'player1'] = player1
        player1_changed = True

    if len(check_match2) > 0:
        new_name = check_match2.item() + 1
        player2 = str(hardcoded_names2[new_name])
        df_order.loc[i, 'player2'] = player2
        player2_changed = True

    # Check for periods in player names suchs as J.J. Wolf
    if bool(re.search(r'\.{1,2}', player1)) & (not player1_changed):
        fname1 = re.search(r'\w+.{1,2}', player1)
        lname1 = re.search(r'\s.*', player1)
        df_order.loc[i, 'player1'] = f'{fname1.group()}.{lname1.group()}'
    elif not player1_changed:
        fname1 = re.search(r'\w', player1)
        lname1 = re.search(r'\s.*', player1)
        df_order.loc[i, 'player1'] = f'{fname1.group()}.{lname1.group()}'

    if bool(re.search(r'\.{1,2}', player2)) & (not player2_changed):
        fname2 = re.search(r'\w+.{1,2}', player2)
        lname2 = re.search(r'\s.*', player2)
        df_order.loc[i, 'player2'] = f'{fname2.group()}.{lname2.group()}'
    elif not player2_changed:
        fname2 = re.search(r'\w', player2)
        lname2 = re.search(r'\s.*', player2)
        df_order.loc[i, 'player2'] = f'{fname2.group()}.{lname2.group()}'
 



# left_merged = pd.merge(df_order, df2, how='left', on=['player1', 'player2'])
# left_merged.shape
# df2.shape
# df_order.shape

# left_merged.sort_values(by=['match_num'])

# To capture instances where the winner is player2 and not player 1, switch up all the columns and do a 2nd merge with the new dataset
df2_reverse = df2.rename(columns={'player1' : 'player2', 'player2' : 'player1', 'P1_1' : 'P2_1', 'P1_2' : 'P2_2', 'P1_3' : 'P2_3', 'P1_4' : 'P2_4', 'P1_5' : 'P2_5', 'P2_1' : 'P1_1', 'P2_2' : 'P1_2', 'P2_3' : 'P1_3', 'P2_4' : 'P1_4', 'P2_5' : 'P1_5'})
df2_reverse

# Try to concatenate df2 and df2_reverse by rows (axis = 0 the default) and then merge
concatenated = pd.concat([df2, df2_reverse])
concatenated

left_merged_2 = pd.merge(df_order, concatenated, how='left', on=['player1', 'player2'])
left_merged_2.shape
left_merged_2.sort_values(by=['match_num'])

left_merged_2.to_csv('sample_data_2.csv', index=True)
left_merged_2

df_TB=df_Tiebreak.loc[:,['match_id', 'ElapsedTime', 'SetNo', 'P1GamesWon', 'P2GamesWon', 'SetWinner', 'GameNo', 'GameWinner', 'P1Score', 'P2Score']]

# Pull all of the tiebreak final points
TB_list = df_TB.loc[(df_TB['GameNo'] == 13) & (df_TB['SetWinner'] != 0) & (df_TB['P1GamesWon'] > 0) & (df_TB['P2GamesWon'] > 0)].index.tolist()
TB_list
TB_list_extended = TB_list.copy()
TB_list_extended.extend([x-1 for x in TB_list]) # Need to add the point/record right before the tiebreak ends to capture the final score
TB_list_extended.sort()
TB_list_extended

df_TB.head(12)
df_TB.loc[TB_list]


#df_TB.iloc[255, 'GameNo']
#df_TB.filter(items=[255], axis=0)
#int(df_TB.filter(items=[255], axis=0)['GameNo'].values[0])

#reformat all match id values to remove the year and tournament name
#matchid = re.search(r'-\d\d\d\d', df_TB.loc[i,'match_id'])
#df_TB.loc[i,'match_id'] = matchid.group()[1:]
#df_TB.loc[244,'match_id']


# Rename all of the match id values to remove the year and tournament name (e.g. 2023-wimbledon-1101 to 1101)
# This will allow matching between left_merged_2 (df_order & df2) and df_TB

for i in TB_list_extended:
    matchidi = re.search(r'-\d\d\d\d', df_TB.loc[i,'match_id'])
    matchidj = re.search(r'-\d\d\d\d', df_TB.loc[i-1,'match_id'])
    if matchidi is not None:
        df_TB.loc[i,'match_id'] = matchidi.group()[1:]
    if matchidj is not None:
        df_TB.loc[i-1,'match_id'] = matchidj.group()[1:]

df_TB.sort_values(by=['match_id'])
df_TB = df_TB.loc[TB_list_extended]

df_TB
df_TB.shape
df_TB['match_id'] = df_TB['match_id'].astype(int) # convert match_id from string to integer
df_TB['P1Score'] = df_TB['P1Score'].astype(int) # convert P1Score from string to integer
df_TB['P2Score'] = df_TB['P2Score'].astype(int) # convert P2Score from string to integer

#df_TB.loc[28182]
#df_TB.loc[df_TB['match_id'] == 1408]

df_TB.to_csv('sample_tiebreak_data.csv')

# Add additional columns for set tiebreak scores
left_merged_2 = left_merged_2.reindex(['match_num', 'player1', 'player2', 'Round', 'P1_1', 'P1_1T', 'P1_2', 'P1_2T', 'P1_3', 'P1_3T', 'P1_4', 'P1_4T', 'P1_5', 'P1_5T', 'P2_1', 'P2_1T', 'P2_2', 'P2_2T', 'P2_3', 'P2_3T', 'P2_4', 'P2_4T', 'P2_5', 'P2_5T', 'Winner'], axis=1)
left_merged_2

#left_merged_2.loc[left_merged_2['match_num'] == 1102]

# Iterate through the tiebreak final point list and pull scores from the previous record (i-1) to capture the final score
for i in TB_list:
    if (df_TB.loc[i-1, 'P1Score'] != 0) | (df_TB.loc[i-1, 'P2Score'] != 0):
        matchid = df_TB.loc[i-1, 'match_id']
        set = df_TB.loc[i-1, 'SetNo']
        p1 = df_TB.loc[i-1, 'P1Score']
        p2 = df_TB.loc[i-1, 'P2Score']
        if p1 > p2: # we need to add 1 to the final winners score since the data always stops counting at this point (e.g. 6 needs to be 7)
            p1+=1
        else:
            p2+=1
        # construct column name to enter tiebreak data
        TBcolName1 = ('P1_'+ str(set) + 'T')
        TBcolName2 = ('P2_'+ str(set) + 'T')
        left_merged_2.loc[left_merged_2['match_num'] == matchid, TBcolName1] = p1
        left_merged_2.loc[left_merged_2['match_num'] == matchid, TBcolName2] = p2


left_merged_2.head(12)

#####################################################################################################################################
# Rename all of the match id values to format tournament id, tournament year, match id (e.g. 2023-wimbledon-1101 would be 0320231101)
# 01 = Austrlian Open
# 02 = French Open
# 03 = Wimbledon
# 04 = US Open
#####################################################################################################################################

for i in range(0,len(left_merged_2)):
    left_merged_2.loc[i, 'match_num'] = int(str('032023')+str(left_merged_2.loc[i, 'match_num']))

def isNaN(num):
    return num != num

# Convert NaN values to -1 for the scoring columns
for i in range(0, len(left_merged_2)):
    for j in range(1,6):
        P1_colName =('P1_'+ str(j))
        P1T_colName =('P1_'+ str(j) + 'T')
        P2_colName =('P2_'+ str(j))
        P2T_colName =('P2_'+ str(j) + 'T')
        if isNaN(left_merged_2.loc[i,P1_colName]):
            left_merged_2.loc[i,P1_colName] = -1
        if isNaN(left_merged_2.loc[i,P1T_colName]):
            left_merged_2.loc[i,P1T_colName] = -1
        if isNaN(left_merged_2.loc[i,P2_colName]):
            left_merged_2.loc[i,P2_colName] = -1
        if isNaN(left_merged_2.loc[i,P2T_colName]):
            left_merged_2.loc[i,P2T_colName] = -1



left_merged_2['P1_1'] = left_merged_2['P1_1'].astype(int) # convert P1_1 score from float to integer
left_merged_2['P1_1T'] = left_merged_2['P1_1T'].astype(int) # convert P1_1T score from float to integer
left_merged_2['P1_2'] = left_merged_2['P1_2'].astype(int) # convert P1_2 score from float to integer
left_merged_2['P1_2T'] = left_merged_2['P1_2T'].astype(int) # convert P1_1T score from float to integer
left_merged_2['P1_3'] = left_merged_2['P1_3'].astype(int) # convert P1_3 score from float to integer
left_merged_2['P1_3T'] = left_merged_2['P1_3T'].astype(int) # convert P1_1T score from float to integer
left_merged_2['P1_4'] = left_merged_2['P1_4'].astype(int) # convert P1_4 score from float to integer
left_merged_2['P1_4T'] = left_merged_2['P1_4T'].astype(int) # convert P1_1T score from float to integer
left_merged_2['P1_5'] = left_merged_2['P1_5'].astype(int) # convert P1_5 score from float to integer
left_merged_2['P1_5T'] = left_merged_2['P1_5T'].astype(int) # convert P1_5T score from float to integer

left_merged_2['P2_1'] = left_merged_2['P2_1'].astype(int) # convert P2_1 score from float to integer
left_merged_2['P2_1T'] = left_merged_2['P2_1T'].astype(int) # convert P2_1T score from float to integer
left_merged_2['P2_2'] = left_merged_2['P2_2'].astype(int) # convert P2_2 score from float to integer
left_merged_2['P2_2T'] = left_merged_2['P2_2T'].astype(int) # convert P2_1T score from float to integer
left_merged_2['P2_3'] = left_merged_2['P2_3'].astype(int) # convert P2_3 score from float to integer
left_merged_2['P2_3T'] = left_merged_2['P2_3T'].astype(int) # convert P2_1T score from float to integer
left_merged_2['P2_4'] = left_merged_2['P2_4'].astype(int) # convert P2_4 score from float to integer
left_merged_2['P2_4T'] = left_merged_2['P2_4T'].astype(int) # convert P2_1T score from float to integer
left_merged_2['P2_5'] = left_merged_2['P2_5'].astype(int) # convert P2_5 score from float to integer
left_merged_2['P2_5T'] = left_merged_2['P2_5T'].astype(int) # convert P2_5T score from float to integer

left_merged_2['score1'] = np.empty((len(left_merged_2), 0)).tolist() # create new empty array column for Player 1 scores
left_merged_2['score2'] = np.empty((len(left_merged_2), 0)).tolist() # create new empty array column for Player 2 scores

left_merged_2 = left_merged_2.drop('score1', axis=1) # drop a column
left_merged_2 = left_merged_2.drop('score2', axis=1) # drop a column

left_merged_2['WinnerTeam'] = left_merged_2['Winner']

# Iterate through each record to add player1 and player2 scores to an array
for i in range(0, len(left_merged_2)):

    if left_merged_2.loc[i, 'Winner'] == left_merged_2.loc[i, 'player1']:
        left_merged_2.loc[i, 'WinnerTeam'] = 'team1'
    elif left_merged_2.loc[i, 'Winner'] == left_merged_2.loc[i, 'player2']:
        left_merged_2.loc[i, 'WinnerTeam'] = 'team2'

    for j in range(1,6):
        P1_colName =('P1_'+ str(j))
        P1T_colName =('P1_'+ str(j) + 'T')
        P2_colName =('P2_'+ str(j))
        P2T_colName =('P2_'+ str(j) + 'T')
        if left_merged_2.loc[i,P1_colName] < 0:
            break
        elif left_merged_2.loc[i,P1T_colName] < 0:
            left_merged_2.loc[i,'score1'].append(left_merged_2.loc[i,P1_colName])
        else:
            left_merged_2.loc[i,'score1'].append([left_merged_2.loc[i,P1_colName], left_merged_2.loc[i,P1T_colName]])
        
        if left_merged_2.loc[i,P2_colName] < 0:
            break
        elif left_merged_2.loc[i,P2T_colName] < 0:
            left_merged_2.loc[i,'score2'].append(left_merged_2.loc[i,P2_colName])
        else:
            left_merged_2.loc[i,'score2'].append([left_merged_2.loc[i,P2_colName], left_merged_2.loc[i,P2T_colName]])



#left_merged_2.to_csv('sample_data_2.csv', index=True)
left_merged_2.to_json('temp.json', orient='records', lines=True)
left_merged_2

# Grab necessary columns and ATP records
df_final=left_merged_2.loc[left_merged_2['match_num'] < 320232000, ['match_num', 'player1', 'player2', 'score1', 'score2', 'WinnerTeam', 'Round']]
df_final.rename(columns={'match_num' : 'id', 'player1' : 'team1', 'player2' : 'team2', 'WinnerTeam' : 'winner', 'Round' : 'round'}, inplace=True)
df_final

result = df_final.to_json(orient='records')
parsed = loads(result)
json_object = json.dumps(parsed, indent=4)
with open('sample.json', 'w') as outfile:
    outfile.write(json_object)