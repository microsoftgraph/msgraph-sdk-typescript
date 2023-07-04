import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CumIPmtPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The endPeriod property
     */
    endPeriod?: Json | undefined;
    /**
     * The nper property
     */
    nper?: Json | undefined;
    /**
     * The pv property
     */
    pv?: Json | undefined;
    /**
     * The rate property
     */
    rate?: Json | undefined;
    /**
     * The startPeriod property
     */
    startPeriod?: Json | undefined;
    /**
     * The type property
     */
    type?: Json | undefined;
}
