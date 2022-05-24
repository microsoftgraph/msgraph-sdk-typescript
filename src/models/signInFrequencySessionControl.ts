import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {SigninFrequencyType} from './signinFrequencyType';

export interface SignInFrequencySessionControl extends ConditionalAccessSessionControl{
    /** Possible values are: days, hours. */
    type?:SigninFrequencyType | undefined;
    /** The number of days or hours. */
    value?:number | undefined;
}
