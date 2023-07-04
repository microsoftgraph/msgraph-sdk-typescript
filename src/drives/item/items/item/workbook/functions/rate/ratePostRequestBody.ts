import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RatePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The fv property
     */
    fv?: Json | undefined;
    /**
     * The guess property
     */
    guess?: Json | undefined;
    /**
     * The nper property
     */
    nper?: Json | undefined;
    /**
     * The pmt property
     */
    pmt?: Json | undefined;
    /**
     * The pv property
     */
    pv?: Json | undefined;
    /**
     * The type property
     */
    type?: Json | undefined;
}
