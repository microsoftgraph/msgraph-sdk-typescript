import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {SignInFrequencyAuthenticationType} from './signInFrequencyAuthenticationType';
import {SignInFrequencyInterval} from './signInFrequencyInterval';
import {SigninFrequencyType} from './signinFrequencyType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SignInFrequencySessionControl extends ConditionalAccessSessionControl, Parsable {
    /**
     * The possible values are primaryAndSecondaryAuthentication, secondaryAuthentication, unknownFutureValue.
     */
    authenticationType?: SignInFrequencyAuthenticationType | undefined;
    /**
     * The possible values are timeBased, everyTime, unknownFutureValue.
     */
    frequencyInterval?: SignInFrequencyInterval | undefined;
    /**
     * Possible values are: days, hours.
     */
    type?: SigninFrequencyType | undefined;
    /**
     * The number of days or hours.
     */
    value?: number | undefined;
}
