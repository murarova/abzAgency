import { dropDownActionType } from '../actions/dropDownActions';

const dropDownReducer = (state = false, { type }) => {
    switch (type) {
        case dropDownActionType.DROP_DOWN_TOGGLE:
            return !state;

        default:
            return state;
    }
};

export default dropDownReducer;
