import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LookupPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The lookupValue property */
    lookupValue?: Json | undefined;
    /** The lookupVector property */
    lookupVector?: Json | undefined;
    /** The resultVector property */
    resultVector?: Json | undefined;
}
