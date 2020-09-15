export type ActionType =
    ReturnType<typeof increment> |
    ReturnType<typeof resetStartValue> |
    ReturnType<typeof setStartValue> |
    ReturnType<typeof disableButton> |
    ReturnType<typeof setMaxValue>

export type CounterType = {
    start: number | null
    max: number
    count: number
    isHide: boolean
}

const INCREMENT = 'INCREMENT'
const RESET_START_VALUE = 'RESET_START_VALUE'
const SET_START_VALUE = 'SET_START_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const DISABLE_BUTTON = 'DISABLE_BUTTON'

let initialState: CounterType = {
    start: null,
    max: 0,
    count: 0,
    isHide: false
}

export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case INCREMENT:
            if (state.count < state.max) {
                return {
                    ...state,
                    count: state.count + 1
                }
            } else return {
                ...state,
                start: state.start
            }

        case RESET_START_VALUE:
            return {
                ...state,
                count: state.start
            }
        case SET_START_VALUE:
            return {
                ...state,
                start: action.start,
                count: action.start
            }
        case SET_MAX_VALUE:
            return {
                ...state,
                max: action.max
            }
        case DISABLE_BUTTON:
            return {
                ...state,
                isHide: action.isHide
            }
    }
    return state
}

export const increment = () => {
    return {type: "INCREMENT"} as const
}
export const resetStartValue = () => {
    return {type: "RESET_START_VALUE"} as const
}
export const setStartValue = (start: any) => {
    return {type: "SET_START_VALUE", start} as const
}
export const setMaxValue = (max: any) => {
    return {type: "SET_MAX_VALUE", max} as const
}
export const disableButton = (isHide: boolean) => {
    return {type: "DISABLE_BUTTON", isHide} as const
}