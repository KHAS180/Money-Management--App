import pandas as pd
import numpy as np
import streamlit as st
import os
import plotly.express as px

st.title("Money Manager App")

# ---------------------------------------
# INITIALIZE SESSION DATA
# ---------------------------------------
if "transactions" not in st.session_state:
    if os.path.exists("transactions.csv"):
        st.session_state["transactions"] = pd.read_csv("transactions.csv")
    else:
        st.session_state["transactions"] = pd.DataFrame(
            columns=["Date", "Description", "Category", "Amount"] )

# ---------------------------------------
# INPUT FORM
# ---------------------------------------
st.write("### Add a Transaction")

with st.form("transaction_form"):
    date = st.date_input("Date")
    description = st.text_input("Description")
    category = st.selectbox("Category", ["Income", "Food", "Rent", "Bills", "Travel", "Entertainment", "Other"])
    amount = st.number_input("Amount", step=0.01, format="%.2f")
    submitted = st.form_submit_button("Add Transaction")

    if submitted:
        new_row = pd.DataFrame(
            [[date, description, category, amount]],
            columns=["Date", "Description", "Category", "Amount"]
        )
        st.session_state["transactions"] = pd.concat(
            [st.session_state["transactions"], new_row], 
            ignore_index=True
        )
        st.success("Transaction added!")


# ---------------------------------------
# DISPLAY TABLE
# ---------------------------------------
st.write("### All Transactions")
st.dataframe(st.session_state["transactions"])


# ---------------------------------------
# FINANCIAL OVERVIEW
# ---------------------------------------
st.write("### Financial Overview")

if not st.session_state["transactions"].empty:
    df = st.session_state["transactions"]

    # Convert Date to datetime
    df["Date"] = pd.to_datetime(df["Date"])

    total_income = df[df["Amount"] > 0]["Amount"].sum()
    total_expense = df[df["Amount"] < 0]["Amount"].sum()
    net_balance = total_income + total_expense

    col1, col2, col3 = st.columns(3)
    col1.metric("Total Income", f"${total_income:,.2f}")
    col2.metric("Total Expenses", f"${total_expense:,.2f}")
    col3.metric("Net Balance", f"${net_balance:,.2f}")


# ---------------------------------------
# CATEGORY SPENDING BAR CHART
# ---------------------------------------
st.write("### Spending by Category")

if not st.session_state["transactions"].empty:
    summary = (
        df.groupby("Category")["Amount"]
        .sum()
        .reset_index()
        .sort_values("Amount")
    )
    st.bar_chart(summary.set_index("Category"))


# ---------------------------------------
# PIE CHART (Plotly)
# ---------------------------------------
st.write("### Spending Breakdown")

if not st.session_state["transactions"].empty:
    fig = px.pie(summary, values="Amount", names="Category", title="Spending Breakdown")
    st.plotly_chart(fig)


# ---------------------------------------
# MONTH FILTER
# ---------------------------------------
st.write("### Filter by Month")

if not df.empty:
    df["Month"] = df["Date"].dt.to_period("M").astype(str)
    months = df["Month"].unique()

    selected_month = st.selectbox("Select Month", months)
    filtered = df[df["Month"] == selected_month]

    st.write(f"#### Transactions for {selected_month}")
    st.dataframe(filtered)


# ---------------------------------------
# SAVE DATA
# ---------------------------------------
if st.button("Save Data"):
    st.session_state["transactions"].to_csv("transactions.csv", index=False)
    st.success("Data saved to transactions.csv!")
  
