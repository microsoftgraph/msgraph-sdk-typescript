import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkDayPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The days property
     */
    days?: Json | undefined;
    /**
     * The holidays property
     */
    holidays?: Json | undefined;
    /**
     * The startDate property
     */
    startDate?: Json | undefined;
}
