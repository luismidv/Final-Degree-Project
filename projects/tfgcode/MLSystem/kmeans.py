import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from  sklearn.preprocessing import OneHotEncoder
from sklearn.cluster import KMeans
from sklearn.model_selection import train_test_split

def data_preparing():
    dataframe = pd.read_csv('./MLSystem/data/users_dataframe.csv')
    print(dataframe.describe())
    columns = ['Age', 'Worktimes', 'Schedules', 'Studies level', 'Pets', 'Cooking', 'Sport', 'Smoking', 'Organized']
    dataframe = dataframe[columns]
    return dataframe

def data_checking(dataframe):
    for col in dataframe.columns:
        if dataframe[col].isnull().sum() > 0:
            print(f"Missing values in {col} column")
        else:
            print(f"No missing values in column {col}")

def forward_algorithm(dataframe):
    encoder = OneHotEncoder(sparse_output=False)
    encoded_df = encoder.fit_transform(dataframe)
    print(encoded_df)
    k_means = KMeans(n_clusters=2, n_init = 10, max_iter=300, random_state=42)
    k_means.fit(encoded_df)
    predict = k_means.predict(encoded_df)
    print(predict)



dataframe = data_preparing()
forward_algorithm(dataframe)