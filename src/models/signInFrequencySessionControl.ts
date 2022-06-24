import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {SigninFrequencyType} from './signinFrequencyType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SignInFrequencySessionControl extends ConditionalAccessSessionControl, Partial<Parsable> {
    /** Possible values are: days, hours, or null if frequencyInterval is everyTime . */
    type?: SigninFrequencyType | undefined;
    /** The number of days or hours. */
    value?: number | undefined;
}
