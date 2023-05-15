import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MatchPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The lookupArray property */
    lookupArray?: Json | undefined;
    /** The lookupValue property */
    lookupValue?: Json | undefined;
    /** The matchType property */
    matchType?: Json | undefined;
}
