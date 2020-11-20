import React, {useCallback, useState} from 'react';
import Context from './context';
import mock from '../mock.js'

export const CategoriesProvider = (props) => {
    const [data, setData] = useState([]);
    console.log('data', data)
    const get = useCallback(() => {
        return Promise.resolve().then(() => {
            setData(mock.categories);
        }, function() {
            console.error('no data')
        });

    }, [mock.categories, setData]);

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
        remove,
        data,
        setData
    };

    return (
        <Context.Provider value={providerValue}>
            {props.children}
        </Context.Provider>
    )
};

export default CategoriesProvider;