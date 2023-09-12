import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface RriPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The fv property
     */
    fv?: Json | undefined;
    /**
     * The nper property
     */
    nper?: Json | undefined;
    /**
     * The pv property
     */
    pv?: Json | undefined;
}
