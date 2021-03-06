import { CatState } from "./CatContext";

type CatAction = { type: "category"; payload: string } | { type: 'date'; payload: string} | { type: 'time'; payload: string}

export const catReducer = (state: CatState, action: CatAction): CatState => {
  switch (action.type) {
    case "category":
      return {
        ...state,
        category: action.payload,
      };
    case "date":
      return {
        ...state,
        date: action.payload
      }
    case "time":
      return {
        ...state,
        time: action.payload
      }
  }
};
