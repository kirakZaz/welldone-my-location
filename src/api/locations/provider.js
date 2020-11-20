import React, {useCallback, useState} from 'react';
import Context from './context';
import mock from '../mock.js'

export const LocationsProvider = (props) => {
    const [data, setData] = useState([]);

    const get = useCallback(() => {
        return Promise.resolve().then(() => {
            setData(mock.locations)
        }, function() {
            console.error('no data')
        });

    }, [setData, mock.locations]);

    const put = useCallback((body) => {
        const newData = data.reduce((acc, next) => {
            if (next.id === body.id) {
                return acc.concat(body)

            }
            return acc.concat(next)
        }, []);
        setData(newData)

    }, [data]);

    const post = useCallback((body) => {
        const id = body.name.toLowerCase().split(' ').join('_');
            const newData = data.concat({id, ...body});
            setData(newData)

    }, [data]);

    const remove = useCallback((id) => {
        return Promise.resolve().then(() => {
                const filtered = data.filter((item) =>  item.id !== id);
                setData(filtered);
        }, function() {
            console.error('no data')
        });
    }, [data]);


    const providerValue = {
        get,
        put,
        post,
        data,
        setData,
        remove
    };

    return (
        <Context.Provider value={providerValue}>
            {props.children}
        </Context.Provider>
    )
};

export default LocationsProvider;