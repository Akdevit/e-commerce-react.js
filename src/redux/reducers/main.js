import {combineReducers} from "redux"
import {cartreducers} from "./reducer"
import {Wishcartreducers} from "./reducer"
const rooted = combineReducers({
    cartreducers,
    Wishcartreducers
});

export default rooted;