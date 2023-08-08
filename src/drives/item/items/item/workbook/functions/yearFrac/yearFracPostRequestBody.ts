import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface YearFracPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The basis property
     */
    basis?: Json | undefined;
    /**
     * The endDate property
     */
    endDate?: Json | undefined;
    /**
     * The startDate property
     */
    startDate?: Json | undefined;
}
