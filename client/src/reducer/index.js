const initialState = {
  allDogs: [],
  dogs: [],
  detail: [],
  temperaments: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_DOGS':
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case 'GET_DOG_NAME':
      return {
        ...state,
        dogs: action.payload,
      };

    case 'GET_DETAIL_DOG':
      return {
        ...state,
        detail: action.payload,
      };

    case 'GET_TEMPERAMENTS':
      return {
        ...state,
        temperaments: action.payload,
      };

    case 'POST_DOG':
      return {
        ...state,
      };

    case 'PUT_DOG':
      return {
        ...state,
      };

    case 'DELETE_DOG':
      return {
        ...state,
      };

    case 'FILTER_TEMPERAMENTS':
      const dogsTemps = state.allDogs;
      const filterTemp =
        action.payload === 'allTemps'
          ? dogsTemps
          : dogsTemps.filter((dog) => {
              for (let i = 0; i < dog.temperaments.length; i++) {
                if (dog.temperaments[i].name === action.payload) return true;
                else if (dog.temperaments.includes(action.payload)) return true;
              }
              return false;
            });
      return {
        ...state,
        dogs: filterTemp,
      };

    case 'FILTER_EXISTENCE':
      const dogsAll = state.allDogs;
      const filterExist =
        action.payload === 'allExist'
          ? dogsAll
          : action.payload === 'created'
          ? dogsAll.filter((dog) => dog.createdInDb)
          : dogsAll.filter((dog) => !dog.createdInDb);
      return {
        ...state,
        dogs: filterExist,
      };

    case 'FILTER_SORT':
      const sortBy =
        action.payload === 'aToZ'
          ? state.dogs.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              return 0;
            }) //sino
          : action.payload === 'zToA'
          ? state.dogs.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              }
              return 0;
            })
          : action.payload === 'weightAsc'
          ? state.dogs.sort(function (a, b) {
              const PromA = (parseInt(a.weightMin) + parseInt(a.weightMax)) / 2;
              const PromB = (parseInt(b.weightMin) + parseInt(b.weightMax)) / 2;
              if (PromA > PromB) {
                return 1;
              }
              if (PromA < PromB) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              const PromA = (parseInt(a.weightMin) + parseInt(a.weightMax)) / 2;
              const PromB = (parseInt(b.weightMin) + parseInt(b.weightMax)) / 2;
              if (PromA > PromB) {
                return -1;
              }
              if (PromA < PromB) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortBy,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;

/* case 'FILTER_ALPHA':
      const filterAlpha =
        action.payload === 'asc' ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: filterAlpha,
      };
 */
