#Import packages
import pandas as pd # read_csv
import os, re, math
import matplotlib.pyplot as plt
import numpy as np
from json import loads, dumps
import json


############################
# set working directory
############################
os.chdir(r"C:\Users\blue_\Documents\Kaggle\Web Development\Tennis-VPN-React\data\us-open")
os.getcwd()

######################
# display options
######################
pd.set_option('display.max_rows', 20)
pd.set_option('display.max_columns', None)
pd.set_option('display.max_colwidth', None)


##########################
# Load data
# Data completed:
# Australian Open (M)
# Australian Open (W)
# French Open (M)
# French Open (W)
# Wimbledon (M) 2024, 2023
# Wimbledon (W) 2024, 2023
# US Open (M) 2024, 2023
# US Open (W) 2024
##########################
tournament_folder = "us-open"
tournament_file = re.sub(r'-', '', tournament_folder)
year = "2023"

df1=pd.read_csv(f"C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/{tournament_folder}/{year}-{tournament_file}_mens.csv")
df1=pd.read_csv(f"C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/{tournament_folder}/{year}-{tournament_file}_womens.csv")
df_order=pd.read_csv(f"C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/{tournament_folder}/{year}-{tournament_file}-matches.csv")
df_Tiebreak=pd.read_csv(f'C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/{tournament_folder}/{year}-{tournament_file}-points.csv')

#######################################
# Step 1:
# df2 Match Scores data cleaning
# grab necessary columns
#######################################
df2=df1.loc[:, ['Round', 'Winner', 'Loser', 'W1', 'W2', 'W3', 'W4', 'W5', 'L1', 'L2', 'L3', 'L4', 'L5']] # Mens are best of 5
df2=df1.loc[:, ['Round', 'Winner', 'Loser', 'W1', 'W2', 'W3', 'L1', 'L2', 'L3']] # Womens are best of 3


######################################
# Step 2:
# Relabel rounds to integers 1-7
######################################
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
        

##################################################################################
# Step 3a:
# Reformat player names to first initial. last name of the match results csv (df2)
##################################################################################
#ATP
player_hardcoded_names1 = ['Zhang Zh.', 'Z. Zhang', 'O Connell C.', "C. O'Connell", 'Barrios M.', 'T. Barrios Vera', 'Mcdonald M.', 'M. McDonald', 
                           'Auger-Aliassime F.', 'F. Auger Aliassime', 'Ramos-Vinolas A.', 'A. Ramos Vinolas', 'Struff J.L.', 'J. Lennard Struff', 
                           'Mpetshi G.', 'G. Mpetshi Perricard', 'De Minaur A.', 'A. de Minaur', 'Kwon S.W.', 'S. Kwon', 'Hsu Y.', 'Y.H. Hsu']
#WTA
player_hardcoded_names1 = ['Mcnally C.', 'C. McNally', 'Wang Xin.', 'Xinyu Wang', 'Wang Xiy.', 'Xiyu Wang', 'Osorio M.', 'C. Osorio', 'Friedsam A.L.', 'A. Lena Friedsam', 
                           'Fernandez L.A.', 'L. Fernandez', 'Pliskova Ka.', 'K. Pliskova', 'Riske-Amritraj A.', 'A. Riske Amritraj', 'Carle M.', 'M.L. Carle',
                           'Ruse E.G.', 'E. Ruse', 'Rodionova Ar.', 'A. Rodionova', 'Bassols M.', 'M. Bassols Ribera']

hardcoded_names1 = np.array(player_hardcoded_names1)
#####################################################################################
# Step 3b:
# Reformat player names to first initial. last name of the draw order csv (df_order)
#####################################################################################
#ATP
player_hardcoded_names2 = ['Marc Andrea Huesler', 'M.A. Huesler', 'Juan Manuel Cerundolo', 'J.M. Cerundolo', 'Daniel Elahi Galan', 'D.E. Galan', 
                           'Juan Pablo Varillas', 'J.P. Varillas', 'Tomas Martin Etcheverry', 'T. Etcheverry', 'Botic van De Zandschulp', 'B. Van De Zandschulp',
                           'Yu Hsiou Hsu', 'Y.H. Hsu']
#WTA
player_hardcoded_names2 = ['Anna Karolina Schmiedlova', 'A. Schmiedlova', 'Xinyu Wang', 'Xinyu Wang', 'Xiyu Wang', 'Xiyu Wang', 'Irina Camelia Begu', 'I. Begu',
                           'Maria Lourdes Carle', 'M.L. Carle', 'Elena Gabriela Ruse', 'E. Ruse', 'Yuriko Lily Miyazaki', 'Y. Miyazaki']

hardcoded_names2 = np.array(player_hardcoded_names2)

##############################################################################################
# Step 4:
# Reformat names (df2) from Williams S. to S. Williams (switch last name, first name order)
##############################################################################################
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
        new_name = check_match1[0].item() + 1
        player1 = str(hardcoded_names1[new_name])
        df2.loc[i, 'Winner'] = player1
        player1_changed = True

    if len(check_match2) > 0:
        new_name = check_match2[0].item() + 1
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

##################################################################
# Step 5:
# Rename columns for df2 and add Winner column (player 1)
##################################################################
df2.rename(columns={'Winner' : 'player1', 'Loser' : 'player2', 'W1' : 'P1_1', 'W2' : 'P1_2', 'W3' : 'P1_3', 'W4' : 'P1_4', 'W5' : 'P1_5', 'L1' : 'P2_1', 'L2' : 'P2_2', 'L3' : 'P2_3', 'L4' : 'P2_4', 'L5' : 'P2_5'}, inplace=True)
df2['Winner'] = df2['player1']



#df2.to_csv('sample_data.csv', index=True)

###############################################################
# Step 6:
# Grab necessary columsn for df_order (Tournament Draw)
###############################################################
df_order = df_order.loc[:, ['match_num', 'player1', 'player2']]

################################################################
# Step 6b:
# Grab only ATP or WTA matches and reset the index if necessary
################################################################
df_order = df_order.loc[df_order['match_num'] < 2000, :] # ATP
df_order = df_order.loc[df_order['match_num'] >= 2000, :] # WTA
df_order = df_order.reset_index(drop=True)


############################################################################################################
# Step 7 (a):
# If necessary add walkovers into the df_order draw. For some reason walkovers are excluded from df_order
# between() is inclusive of the boundaries.
############################################################################################################
# ATP
df_order[df_order['match_num'].between(1000, 1200)].shape # 64 matches
df_order[df_order['match_num'].between(1200, 1300)].shape # 32 matches
df_order[df_order['match_num'].between(1300, 1400)].shape # 15 matches
df_order[df_order['match_num'].between(1400, 1500)].shape # 8 matches
df_order[df_order['match_num'].between(1500, 1600)].shape # 3 matches
df_order[df_order['match_num'].between(1600, 1700)].shape # 2 matches
df_order[df_order['match_num'].between(1700, 1800)].shape # 1 matches

#WTA
df_order[df_order['match_num'].between(2000, 2200)].shape # 64 matches
df_order[df_order['match_num'].between(2200, 2300)].shape # 32 matches
df_order[df_order['match_num'].between(2300, 2400)].shape # 16 matches
df_order[df_order['match_num'].between(2400, 2500)].shape # 8 matches
df_order[df_order['match_num'].between(2500, 2600)].shape # 4 matches
df_order[df_order['match_num'].between(2600, 2700)].shape # 2 matches
df_order[df_order['match_num'].between(2700, 2800)].shape # 1 matches

df_order[df_order['match_num'].between(2200, 2300)]

# Create a dictionary with the data for the new row
new_row = {'match_num': 1314, 'player1': 'Lucas Pouille', 'player2': 'Alex de Minaur'}
new_row = {'match_num': 1504, 'player1': 'Alex de Minaur', 'player2': 'Novak Djokovic'}
new_row = {'match_num': 2209, 'player1': 'Elena Rybakina', 'player2': 'Jessika Ponchet'} #2209 added to USO Womens 2024

# Append the dictionary to the DataFrame and sort
df_order.loc[len(df_order)] = new_row
df_order = df_order.sort_values(by=['match_num'])

# Reset the index
df_order = df_order.reset_index(drop=True)

df1.loc[df1["Comment"] != 'Completed',:] # Filter for retired and walkover matches.
df1.loc[df1["Comment"] == 'Walkover',:] # Filter for walkover matches.

#####################################################################################################
# Step 7 (b):
# Reformat names (df_order) from Serena Williams to S. Williams (abbreviate first name to initial)
#####################################################################################################
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
        new_name = check_match1[0].item() + 1
        player1 = str(hardcoded_names2[new_name])
        df_order.loc[i, 'player1'] = player1
        player1_changed = True

    if len(check_match2) > 0:
        new_name = check_match2[0].item() + 1
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

####################################################################################################################################################################
# Step 8:
# To capture instances where the winner is player2 and not player 1 (in df_order), switch up all the columns and concatenate the datasets for a merge with df_orer
####################################################################################################################################################################
df2_reverse = df2.rename(columns={'player1' : 'player2', 'player2' : 'player1', 'P1_1' : 'P2_1', 'P1_2' : 'P2_2', 'P1_3' : 'P2_3', 'P1_4' : 'P2_4', 'P1_5' : 'P2_5', 'P2_1' : 'P1_1', 'P2_2' : 'P1_2', 'P2_3' : 'P1_3', 'P2_4' : 'P1_4', 'P2_5' : 'P1_5'})


#######################################################################################
# Step 9 (a):
# Try to concatenate df2 and df2_reverse by rows (axis = 0 the default) and then merge
# with df_order. Concat will append based on column names.
#######################################################################################
concatenated = pd.concat([df2, df2_reverse])
left_merged_2 = pd.merge(df_order, concatenated, how='left', on=['player1', 'player2'])
left_merged_2 = left_merged_2.sort_values(by=['match_num'])
left_merged_2 = left_merged_2.reset_index(drop=True)


#######################################################################################
# Step 9 (b):
# Check for names that are not matching and pulling in score data.
#######################################################################################
def isNaN(num):
    return num != num

left_merged_2.loc[isNaN(left_merged_2["Round"]),:] # Filter for names that are NA for the Round variable, thus not pulling data

TEXTNAME = 'Kokkinakis'

df2[df2['player1'].str.contains(rf'{TEXTNAME}')] # Individually check the df2 names as needed for player1
df2[df2['player2'].str.contains(rf'{TEXTNAME}')] # Individually check the df2 names as needed for player2

df1[df1['Winner'].str.contains(rf'{TEXTNAME}')] # Individually check original df2 dataframe, df1
df1[df1['Loser'].str.contains(rf'{TEXTNAME}')] # Individually check original df2 dataframe, df1

# Reload df_order to get the original naming string
df_order_r=pd.read_csv(f"C:/Users/blue_/Documents/Kaggle/Web Development/Tennis-VPN-React/data/{tournament_folder}/{year}-{tournament_file}-matches.csv")

df_order_r[df_order_r['player1'].str.contains(rf'{TEXTNAME}')] # Individually check the df_order names as needed for player1
df_order[df_order['player1'].str.contains(rf'{TEXTNAME}')] # Individually check the df_order names as needed for player1

df_order_r[df_order_r['player2'].str.contains(rf'{TEXTNAME}')] # Individually check the df_order names as needed for player2
df_order[df_order['player2'].str.contains(rf'{TEXTNAME}')] # Individually check the df_order names as needed for player2

left_merged_2[left_merged_2['player1'].str.contains(rf'{TEXTNAME}')] # Individually check the left_merged_2 names as needed

#################################################################################################
# Step 9 (c):
# For easier editing and less scrolling, copy and paste hardcoded arrays to step 3 when finished
#################################################################################################

## df2 ##
#ATP
player_hardcoded_names1 = ['Zhang Zh.', 'Z. Zhang', 'O Connell C.', "C. O'Connell", 'Barrios M.', 'T. Barrios Vera', 'Mcdonald M.', 'M. McDonald', 
                           'Auger-Aliassime F.', 'F. Auger Aliassime', 'Ramos-Vinolas A.', 'A. Ramos Vinolas', 'Struff J.L.', 'J. Lennard Struff', 
                           'Mpetshi G.', 'G. Mpetshi Perricard', 'De Minaur A.', 'A. de Minaur', 'Kwon S.W.', 'S. Kwon', 'Hsu Y.', 'Y.H. Hsu']
#WTA
player_hardcoded_names1 = ['Mcnally C.', 'C. McNally', 'Wang Xin.', 'Xinyu Wang', 'Wang Xiy.', 'Xiyu Wang', 'Osorio M.', 'C. Osorio', 'Friedsam A.L.', 'A. Lena Friedsam', 
                           'Fernandez L.A.', 'L. Fernandez', 'Pliskova Ka.', 'K. Pliskova', 'Riske-Amritraj A.', 'A. Riske Amritraj', 'Carle M.', 'M.L. Carle',
                           'Ruse E.G.', 'E. Ruse', 'Rodionova Ar.', 'A. Rodionova', 'Bassols M.', 'M. Bassols Ribera']

## df_order ##
#ATP
player_hardcoded_names2 = ['Marc Andrea Huesler', 'M.A. Huesler', 'Juan Manuel Cerundolo', 'J.M. Cerundolo', 'Daniel Elahi Galan', 'D.E. Galan', 
                           'Juan Pablo Varillas', 'J.P. Varillas', 'Tomas Martin Etcheverry', 'T. Etcheverry', 'Botic van De Zandschulp', 'B. Van De Zandschulp',
                           'Yu Hsiou Hsu', 'Y.H. Hsu']
#WTA
player_hardcoded_names2 = ['Anna Karolina Schmiedlova', 'A. Schmiedlova', 'Xinyu Wang', 'Xinyu Wang', 'Xiyu Wang', 'Xiyu Wang', 'Irina Camelia Begu', 'I. Begu',
                           'Maria Lourdes Carle', 'M.L. Carle', 'Elena Gabriela Ruse', 'E. Ruse', 'Yuriko Lily Miyazaki', 'Y. Miyazaki']


#concatenated.to_csv('sample_data_c.csv', index=True)
#left_merged_2.to_csv('sample_data_2.csv', index=True)
#left_merged_2
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
player1 = 'Cocciaretto E.' #

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
# end of regex testing
#################################################################################


#############################################################
# Step 10:
# Grab necessary columns for tiebreak data (df_Tiebreak)
#############################################################
df_TB=df_Tiebreak.loc[:,['match_id', 'ElapsedTime', 'SetNo', 'P1GamesWon', 'P2GamesWon', 'SetWinner', 'GameNo', 'GameWinner', 'P1Score', 'P2Score']]

##################################################################################################################
# Step 11:
# Rename all of the match id values to remove the year and tournament name (e.g. 2023-wimbledon-1101 to 1101)
# This will allow matching between left_merged_2 (df_order & df2) and df_TB
# Grab men's or women's tiebreak data and reindex
##################################################################################################################
for i in range(0,len(df_TB)):
    matchid = re.search(r'-\d\d\d\d', df_TB.loc[i,'match_id'])
    if matchid is not None:
        df_TB.loc[i,'match_id'] = matchid.group()[1:]

df_TB['match_id'] = df_TB['match_id'].astype(int) # convert match_id from string to integer
df_TB = df_TB.loc[df_TB['match_id'] < 2000, :] # ATP mens
df_TB = df_TB.loc[df_TB['match_id'] >= 2000, :] # WTA womens
df_TB = df_TB.reset_index(drop=True)

##########################################################################################################################
# Step 12:
# Pull all of the tiebreak final points (requires 2 rows for each final score b/c how the data is captured in the file)
##########################################################################################################################
TB_list = df_TB.loc[(df_TB['GameNo'] == 13) & (df_TB['SetWinner'] != 0) & (df_TB['P1GamesWon'] > 0) & (df_TB['P2GamesWon'] > 0)].index.tolist()
#TB_list
TB_list_extended = TB_list.copy()
TB_list_extended.extend([x-1 for x in TB_list]) # Need to add the point/record right before the tiebreak ends to capture the final score
TB_list_extended.sort()
#TB_list_extended

#df_TB.head(12)
#df_TB.loc[TB_list]


#df_TB.iloc[255, 'GameNo']
#df_TB.filter(items=[255], axis=0)
#int(df_TB.filter(items=[255], axis=0)['GameNo'].values[0])

#reformat all match id values to remove the year and tournament name
#matchid = re.search(r'-\d\d\d\d', df_TB.loc[i,'match_id'])
#df_TB.loc[i,'match_id'] = matchid.group()[1:]
#df_TB.loc[244,'match_id']

##############################################################################################################
# Rename all of the match id values to remove the year and tournament name (e.g. 2023-wimbledon-1101 to 1101)
# This will allow matching between left_merged_2 (df_order & df2) and df_TB
##############################################################################################################
#for i in TB_list_extended:
#    matchidi = re.search(r'-\d\d\d\d', df_TB.loc[i,'match_id'])
#    matchidj = re.search(r'-\d\d\d\d', df_TB.loc[i-1,'match_id'])
#    if matchidi is not None:
#        df_TB.loc[i,'match_id'] = matchidi.group()[1:]
#    if matchidj is not None:
#        df_TB.loc[i-1,'match_id'] = matchidj.group()[1:]

df_TB.sort_values(by=['match_id'])
df_TB = df_TB.loc[TB_list_extended] # filter df_TB to only the required tiebreak scores 

#df_TB
#df_TB.shape
df_TB['P1Score'] = df_TB['P1Score'].astype(int) # convert P1Score from string to integer
df_TB['P2Score'] = df_TB['P2Score'].astype(int) # convert P2Score from string to integer

# Grab only WTA matches
# df_TB = df_TB.loc[df_TB['match_id'] >= 2000, :]

#df_TB.loc[28182]
#df_TB.loc[df_TB['match_id'] == 1408]

#df_TB.to_csv('sample_tiebreak_data.csv')
#####################################################################
# Step 13a:
# Add additional columns for set tiebreak scores (ATP Mens)
#####################################################################
left_merged_2 = left_merged_2.reindex(['match_num', 'player1', 'player2', 'Round', 'P1_1', 'P1_1T', 'P1_2', 'P1_2T', 'P1_3', 'P1_3T', 'P1_4', 'P1_4T', 'P1_5', 'P1_5T', 'P2_1', 'P2_1T', 'P2_2', 'P2_2T', 'P2_3', 'P2_3T', 'P2_4', 'P2_4T', 'P2_5', 'P2_5T', 'Winner'], axis=1)

#####################################################################
# Step 13b:
# Add additional columns for set tiebreak scores (WTA Womens)
#####################################################################
left_merged_2 = left_merged_2.reindex(['match_num', 'player1', 'player2', 'Round', 'P1_1', 'P1_1T', 'P1_2', 'P1_2T', 'P1_3', 'P1_3T', 'P2_1', 'P2_1T', 'P2_2', 'P2_2T', 'P2_3', 'P2_3T', 'Winner'], axis=1)

#left_merged_2

#left_merged_2.loc[left_merged_2['match_num'] == 1102]

##########################################################################################################################
# Step 14:
# Iterate through the tiebreak final point list and pull scores from the previous record (i-1) to capture the final score
##########################################################################################################################
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


# left_merged_2.head(12)

#########################################################################################################################################
# Rename all of the match id values to format: tournament id | tournament year | match id (e.g. 2023-wimbledon-1101 would be 0320231101)
# 01 = Austrlian Open
# 02 = French Open
# 03 = Wimbledon
# 04 = US Open
#########################################################################################################################################

for i in range(0,len(left_merged_2)):
    left_merged_2.loc[i, 'match_num'] = int(str('042023')+str(left_merged_2.loc[i, 'match_num']))


######################################################
# Step 16:
# Convert NaN values to -1 for the scoring columns
# Update the range in j for loop (ATP Mens vs WTA Womens)
######################################################
for i in range(0, len(left_merged_2)):
    for j in range(1,6): #Mens to 6 and Womens to 4
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

###################################################
# Step 17:
# Convert strings to integers
###################################################
left_merged_2['P1_1'] = left_merged_2['P1_1'].astype(int) # convert P1_1 score from float to integer
left_merged_2['P1_1T'] = left_merged_2['P1_1T'].astype(int) # convert P1_1T score from float to integer
left_merged_2['P1_2'] = left_merged_2['P1_2'].astype(int) # convert P1_2 score from float to integer
left_merged_2['P1_2T'] = left_merged_2['P1_2T'].astype(int) # convert P1_2T score from float to integer
left_merged_2['P1_3'] = left_merged_2['P1_3'].astype(int) # convert P1_3 score from float to integer
left_merged_2['P1_3T'] = left_merged_2['P1_3T'].astype(int) # convert P1_3T score from float to integer

left_merged_2['P1_4'] = left_merged_2['P1_4'].astype(int) # convert P1_4 score from float to integer
left_merged_2['P1_4T'] = left_merged_2['P1_4T'].astype(int) # convert P1_4T score from float to integer
left_merged_2['P1_5'] = left_merged_2['P1_5'].astype(int) # convert P1_5 score from float to integer
left_merged_2['P1_5T'] = left_merged_2['P1_5T'].astype(int) # convert P1_5T score from float to integer

left_merged_2['P2_1'] = left_merged_2['P2_1'].astype(int) # convert P2_1 score from float to integer
left_merged_2['P2_1T'] = left_merged_2['P2_1T'].astype(int) # convert P2_1T score from float to integer
left_merged_2['P2_2'] = left_merged_2['P2_2'].astype(int) # convert P2_2 score from float to integer
left_merged_2['P2_2T'] = left_merged_2['P2_2T'].astype(int) # convert P2_2T score from float to integer
left_merged_2['P2_3'] = left_merged_2['P2_3'].astype(int) # convert P2_3 score from float to integer
left_merged_2['P2_3T'] = left_merged_2['P2_3T'].astype(int) # convert P2_3T score from float to integer

left_merged_2['P2_4'] = left_merged_2['P2_4'].astype(int) # convert P2_4 score from float to integer
left_merged_2['P2_4T'] = left_merged_2['P2_4T'].astype(int) # convert P2_4T score from float to integer
left_merged_2['P2_5'] = left_merged_2['P2_5'].astype(int) # convert P2_5 score from float to integer
left_merged_2['P2_5T'] = left_merged_2['P2_5T'].astype(int) # convert P2_5T score from float to integer

###########################################################
# Step 18:
# Add score1 and score 2 columns, and WinnerTeam column
###########################################################
left_merged_2['score1'] = np.empty((len(left_merged_2), 0)).tolist() # create new empty array column for Player 1 scores
left_merged_2['score2'] = np.empty((len(left_merged_2), 0)).tolist() # create new empty array column for Player 2 scores
left_merged_2['WinnerTeam'] = left_merged_2['Winner']
#left_merged_2 = left_merged_2.drop('score1', axis=1) # drop a column
#left_merged_2 = left_merged_2.drop('score2', axis=1) # drop a column


##############################################################################
# Step 19:
# Iterate through each record to add player1 and player2 scores to an array
# Update the range in j for loop (ATP Mens vs WTA Womens)
##############################################################################
for i in range(0, len(left_merged_2)):

    if left_merged_2.loc[i, 'Winner'] == left_merged_2.loc[i, 'player1']:
        left_merged_2.loc[i, 'WinnerTeam'] = 'team1'
    elif left_merged_2.loc[i, 'Winner'] == left_merged_2.loc[i, 'player2']:
        left_merged_2.loc[i, 'WinnerTeam'] = 'team2'

    for j in range(1,6): #Mens to 6 and Womens to 4
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



# left_merged_2.to_csv('sample_data_2.csv', index=True)
# left_merged_2.to_json('temp.json', orient='records', lines=True)
#left_merged_2

##############################################################################
# Step 20:
# Grab necessary columns for ATP or WTA records
# Update match_num to reflect tournament id (1, 2, 3, 4) and tournament year
##############################################################################
df_final=left_merged_2.loc[left_merged_2['match_num'] < 420232000, ['match_num', 'player1', 'player2', 'score1', 'score2', 'WinnerTeam', 'Round']] # ATP mens
df_final=left_merged_2.loc[left_merged_2['match_num'] >= 420232000, ['match_num', 'player1', 'player2', 'score1', 'score2', 'WinnerTeam', 'Round']] # WTA womens
df_final.rename(columns={'match_num' : 'id', 'player1' : 'team1', 'player2' : 'team2', 'WinnerTeam' : 'winner', 'Round' : 'round'}, inplace=True)
#df_final.sort_values(by=['id'])
#df_final
#df_final.to_csv('sample_data.csv', index=True)

##################################################################################################
# Step 21:
# Output the results into a sample.json file which we can copy and paste into scoresData.js
##################################################################################################
result = df_final.to_json(orient='records')
parsed = loads(result)
json_object = json.dumps(parsed, indent=4)
with open('sample.json', 'w') as outfile:
    outfile.write(json_object)
    