import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface VlookupPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The colIndexNum property
     */
    colIndexNum?: Json | undefined;
    /**
     * The lookupValue property
     */
    lookupValue?: Json | undefined;
    /**
     * The rangeLookup property
     */
    rangeLookup?: Json | undefined;
    /**
     * The tableArray property
     */
    tableArray?: Json | undefined;
}
