import React, {useCallback, useState} from 'react';
import Context from './context';
import mock from '../mock.js'

// export const Context = createContext();

export const LocationsProvider = (props) => {
    const [data, setData] = useState([]);
console.log('data', data)
    const get = useCallback(() => {
        return Promise.resolve().then(() => {
            setData(mock.locations);
            return mock.locations
        }, function() {
            console.error('no data')
        });

    }, [mock, setData]);

    const put = useCallback((body) => {
        if (body.includes('id')) {
            const newData = data.reduce((acc, next) => {
                if (next.id === body.id) {
                    localStorage.removeItem(body.id);
                    localStorage.setItem(body.id, body);
                    const updatedItem = localStorage.getItem(body.id);
                    acc.concat(updatedItem)
                }
                return acc.concat(next)
            }, []);
            setData(newData)
        } else {
            alert('id is required')
        }
    }, [data]);

    const post = useCallback((body) => {
        if (body.includes('id')) {
            const newData = data.reduce((acc, next) => {
                if (next.id !== body.id) {
                    localStorage.setItem(body.id, body);
                    const newItem = localStorage.getItem(body.id);
                    acc.concat(newItem)
                } else {
                    alert('this id is already exist')
                }
                return acc.concat(next)
            }, []);
            setData(newData)
        } else {
            alert('id is required')
        }
    }, [data]);

    const providerValue = {
        get,
        put,
        post,
        data,
        setData
    };

    return (
        <Context.Provider value={providerValue}>
            {props.children}
        </Context.Provider>
    )
};

export default LocationsProvider;