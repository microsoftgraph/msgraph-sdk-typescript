import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DatePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The day property
     */
    day?: Json | undefined;
    /**
     * The month property
     */
    month?: Json | undefined;
    /**
     * The year property
     */
    year?: Json | undefined;
}
