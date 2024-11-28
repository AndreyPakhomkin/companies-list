import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export interface Company {
    id: number;
    name: string;
    address: string;
}

interface State {
    companies: Company[]
}

const generateFakeCompanies = (): Company[] => {
  return Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `Company "Fake" ${i + 1}`,
    address: `Fake location ${i + 1}`,
  }));
};

const initialState: State = {
    companies: generateFakeCompanies()
}

//Actions

export const addCompany = createAction<Company>('ADD_COMPANY');
export const deleteCompany = createAction<number[]>('DELETE_COMPANY');
export const updateCompany = createAction<Company>('UPDATE_COMPANY');

//Reducer

const companiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addCompany, (state, action) => {
            state.companies.push(action.payload)
        })
        .addCase(deleteCompany, (state, action) => {
            state.companies = state.companies.filter((company) => !action.payload.includes(company.id))
        })
        .addCase(updateCompany, (state, action) => {
            let index = state.companies.findIndex(company => company.id === action.payload.id)
            if (index !== -1) {
                state.companies[index] = action.payload
            }
        })
})

const store = configureStore({
    reducer: {
        companies: companiesReducer
    }
})

//Тип состояния всего приложения для компонентов

export type RootState = ReturnType<typeof store.getState>;

export default store;