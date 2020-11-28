const locations = [
      {
          id: 'big_ashdod',
          name: 'Big Ashdod',
          address: 'Derech HaRakevet 1, Ashdod',
          coordinates: {lat: '31.776489', lng: '34.663799'},
          category: ['Malls']
      },
    {
        id: 'azrieli_tel_aviv',
        name: 'Azrieli Tel-Aviv',
        address: 'Derech Menachem Begin 132, Tel Aviv-Yafo',
        coordinates: {lat: '32.074291', lng: '34.791559'},
        category: 'Malls'
    },
    {
        id: 'dizengoff_center',
        name: 'Dizengoff center',
        address: 'Dizengoff St 50, Tel Aviv-Yafo',
        coordinates: {lat: '32.074950', lng: '34.774918'},
        category: 'Malls'
    },
    {
        id: 'zozobra',
        name: 'Zozobra',
        address: 'HaHashmonaim St 96, Tel Aviv-Yafo',
        coordinates: {lat: '32.069093', lng: '34.785531'},
        category: 'Food'
    },
    {
        id: 'sorona_food',
        name: 'Azrieli Sarona Tower',
        address: 'Derech Menachem Begin 121, Tel Aviv-Yafo',
        coordinates: {lat: '32.071699', lng: '34.788858'},
        category: 'Food'
    },
    {
        id: 'abu_ghosh',
        name: 'Abu Ghosh',
        address: 'Kvish ha-Shalom 65, Abu Ghosh',
        coordinates: {lat: '31.807304', lng: '35.112985'},
        category: 'Malls'
    },
    {
        id: 'wework_toha',
        name: 'WeWork Toha',
        address: 'Yigal Alon St 114, Tel Aviv-Yafo, 6744320',
        coordinates: {lat: '32.072723', lng: '34.794909'},
        category: 'Work Area'
    },
    {
        id: 'sarona_work',
        name: 'Azrieli Sarona Tower',
        address: 'Derech Menachem Begin 121, Tel Aviv-Yafo',
        coordinates: {lat: '32.071699', lng: '34.788858'},
        category: 'Work Area'
    },
    {
        id: 'hamat_tiberias',
        name: 'Hamat Tiberias National Park',
        address: 'Tiberias',
        coordinates: {lat: '32.766684', lng: '35.550829'},
        category: 'Parks'
    },
    {
        id: 'beit_shean',
        name: 'Beit She"an National Park',
        address: 'Beit She"an',
        coordinates: {lat: '32.499521', lng: '35.498731'},
        category: 'Parks'
    },
];

const categories = [
    {name: 'Malls', id: 'malls'},
    {name: 'Food', id: 'food'},
    {name: 'Work Area', id: 'work_area'},
    {name: 'Parks', id: 'parks'}
];

export default {locations, categories}