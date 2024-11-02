import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

from  sklearn.preprocessing import OneHotEncoder


def data_generator():
    name = ['John', 'Michael', 'Derek', 'Nick', 'Lucas', 'Jorge', 'George', 'Miguel', 'Anthony', 'Antonio', 'Mario', 'Marie' , 'Luna', 'Maria', 'Albert', 'Louisa'
        'Loren', 'Josephine']
    surname = ['Bush', 'Smith', 'Jones', 'Williams', 'Brown','Taylor', 'Davies ', 'Evans ', 'Williams', 'Thomas ','Johnson', 'Roberts ', 'Lee ', 'Walker ', 'Wright'
           ,'Robinson ', 'Thompson ', 'White', 'Hughes ', 'Edwards ']
    work_options = ['both of them', 'morning', 'night']
    morning_night = ['morning', 'night']
    studies_level = ['secondary', 'university']
    yes_no_questions = ['Yes', 'No']
    
    
    name_list = [name[i] for i in np.random.randint(1,17,10000)]
    surname_list = [surname[i] for i in np.random.randint(1,17,10000)]
    email_list = [name_list[i] + surname_list[i] + '@gmail.com' for i in range(len(name_list))]
    age_list = np.random.randint(18,35,10000)
    work_list = [work_options[i] for i in np.random.randint(0,3,10000)]
    morn_night_list = [morning_night[i] for i in np.random.randint(0,2,10000)]
    studies_list = [studies_level[i] for i in np.random.randint(0,2,10000)] 
    pets_list = [yes_no_questions[i] for i in np.random.randint(0,2,10000)]
    cooking_list = [yes_no_questions[i] for i in np.random.randint(0,2,10000)]
    sport_list = [yes_no_questions[i] for i in np.random.randint(0,2,10000)]
    smoking_list = [yes_no_questions[i] for i in np.random.randint(0,2,10000)]
    organized_list = [yes_no_questions[i] for i in np.random.randint(0,2,10000)]
    id_list = np.arange(1,10001,1)
    users_dataframe = pd.DataFrame(list(zip( name_list, surname_list, age_list, email_list, work_list, morn_night_list, studies_list, 
                                            pets_list, cooking_list, sport_list, smoking_list, organized_list)),
    columns =['Names', 'Surnames','Age', 'Email','Worktimes', 'Schedules', 'Studies level', 'Pets', 'Cooking', 'Sport', 'Smoking', 'Organized'])
    users_dataframe.index = id_list
    users_dataframe.index.name = "id"
    users_dataframe.to_csv('./MLSystem/data/users_dataframe.csv')

    return users_dataframe
    




