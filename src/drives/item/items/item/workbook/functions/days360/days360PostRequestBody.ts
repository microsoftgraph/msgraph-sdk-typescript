import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Days360PostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The endDate property
     */
    endDate?: Json | undefined;
    /**
     * The method property
     */
    method?: Json | undefined;
    /**
     * The startDate property
     */
    startDate?: Json | undefined;
}
