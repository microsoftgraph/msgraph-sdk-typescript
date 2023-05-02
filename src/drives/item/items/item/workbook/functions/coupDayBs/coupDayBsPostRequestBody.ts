import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CoupDayBsPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The basis property */
    basis?: Json | undefined;
    /** The frequency property */
    frequency?: Json | undefined;
    /** The maturity property */
    maturity?: Json | undefined;
    /** The settlement property */
    settlement?: Json | undefined;
}
