import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {SigninFrequencyType} from './signinFrequencyType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SignInFrequencySessionControl extends Partial<AdditionalDataHolder>, ConditionalAccessSessionControl, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Possible values are: days, hours, or null if frequencyInterval is everyTime . */
    type?: SigninFrequencyType | undefined;
    /** The number of days or hours. */
    value?: number | undefined;
}
