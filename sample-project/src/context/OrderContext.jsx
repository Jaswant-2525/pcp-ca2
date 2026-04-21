import axios from 'axios';
import { createContext, useContext, useReducer, useEffect } from 'react';
import {getToken, getDataset} from '../api/api';
import OrderReducer from '../reducer/OrderReducer';

const initialState = {
    order: [],
    favorites: [],
    loading: true
};

export const OrderContext = createContext();

export const SampleProvider = ({ children }) => {
    const [state, dispatch] = useReducer(OrderReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const tokenRes = await getToken(
                    "E0323024",
                    "881565",
                    "setA"
                );

                const sample = await getDataset(
                    tokenRes.token,
                    tokenRes.dataUrl
                );

                dispatch({ type: "SET_SAMPLE", payload: sample});

            }catch(err){
                console.log("Dataset Failed to Load" + err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        dispatch({type: "SET_FAVOURITES"});
    }, [state.sample]);

    
};