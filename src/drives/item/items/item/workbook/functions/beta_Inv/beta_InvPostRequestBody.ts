import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Beta_InvPostRequestBody extends AdditionalDataHolder, Parsable {
    /** The A property */
    a?: Json | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The alpha property */
    alpha?: Json | undefined;
    /** The B property */
    b?: Json | undefined;
    /** The beta property */
    beta?: Json | undefined;
    /** The probability property */
    probability?: Json | undefined;
}
