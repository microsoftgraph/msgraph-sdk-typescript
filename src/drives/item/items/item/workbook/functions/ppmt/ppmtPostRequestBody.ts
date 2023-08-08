import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PpmtPostRequestBody extends AdditionalDataHolder, Parsable {
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
     * The per property
     */
    per?: Json | undefined;
    /**
     * The pv property
     */
    pv?: Json | undefined;
    /**
     * The rate property
     */
    rate?: Json | undefined;
    /**
     * The type property
     */
    type?: Json | undefined;
}
