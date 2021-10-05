const INITIAL_STATES = {
  user: null,
  key: '',
  // fullScreen: false,
  // favourites: [],
  // recents: [],
  // downloads: [],
};

export default function (state = INITIAL_STATES, action) {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'KEY':
      return {
        ...state,
        key: action.payload,
      };
    default:
      return state;
  }
}
// case 'DOWNLOAD':
//       return {
//         ...state,
//         downloads: [...state.downloads, action.payload],
//       };
// case "FULLSCREEN":
//   return {
//     ...state,
//     fullScreen:action.payload
//   };
//   case "ADD_TO_FAVOURITES":
//     return {
//       ...state,
//       favourites:[action.payload,...state.favourites]
//     };
//   case "ADD_TO_RECENTS":
//     const filteredRecents = state.recents.filter((item)=>item.uploadedAt === action.payload.uploadedAt)
//     if(!filteredRecents.length)
//     return {
//       ...state,
//       recents:[action.payload,...state.recents]
//     };
//     else
//     return{
//       ...state,
//     }
//   case "DOWNLOAD":
//     const filteredDownloads = state.downloads.filter((item)=>item.uploadedAt === action.payload.uploadedAt)
//     if(!filteredDownloads.length)
//     return {
//       ...state,
//       downloads:[action.payload,...state.downloads]
//     };
//     else
//     return{
//       ...state,
//     }
//   case "DELETE_DOWNLOAD":
//     const filteredDownloads1 = state.downloads.filter((item)=>item.uploadedAt !== action.payload.uploadedAt)
//     return {
//       ...state,
//       downloads:[...filteredDownloads1]
//     };

//   case "REMOVE_FAVOURITE":
//     const filteredFavourites = state.favourites.filter((item)=>item.uploadedAt !== action.payload.uploadedAt)
//     return {
//       ...state,
//       favourites:filteredFavourites
//     };
