export default (state: any, action: any) => {
    switch (action.type) {
      case "PRIDEJ_URL":
        return {
          ...state,
          pdfURL: action.payload,
        };
  
      default:
        return state;
    }
  };