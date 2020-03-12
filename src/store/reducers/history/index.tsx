import {
    ADD_CHARACTERS_HISTORY,
    ADD_EPISODES_HISTORY,
    ADD_LOCATIONS_HISTORY,
    CLEAN_HISTORY
} from "@Store/constants/actions"
import {checkCanAddToHistory} from "@Utils/history";

export interface IHistoryState {
    charactersHistory: string[],
    locationsHistory: string[],
    episodesHistory: string[],
}

const initialState: IHistoryState = {
    charactersHistory: [],
    locationsHistory: [],
    episodesHistory: [],
};

export const historyReducer = (state: IHistoryState = initialState, action: any): IHistoryState => {
    switch (action.type) {
        case ADD_CHARACTERS_HISTORY:
            return {
                ...state,
                charactersHistory: checkCanAddToHistory(state.charactersHistory, action) ? [action.payload, ...state.charactersHistory] : state.charactersHistory
            };

        case ADD_EPISODES_HISTORY:
            return {
                ...state,
                episodesHistory: checkCanAddToHistory(state.episodesHistory, action) ? [action.payload, ...state.episodesHistory] : state.episodesHistory
            };

        case ADD_LOCATIONS_HISTORY:
            return {
                ...state,
                locationsHistory: checkCanAddToHistory(state.locationsHistory, action) ? [action.payload, ...state.locationsHistory] : state.locationsHistory
            };

        case CLEAN_HISTORY:
            return initialState;

        default:
            return state;
    }

};

export const getCharactersHistory = (state: IHistoryState) => state.charactersHistory;
export const getLocationsHistory = (state: IHistoryState) => state.locationsHistory;
export const getEpisodesHistory = (state: IHistoryState) => state.episodesHistory;