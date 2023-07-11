import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Z_TestPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The array property
     */
    array?: Json | undefined;
    /**
     * The sigma property
     */
    sigma?: Json | undefined;
    /**
     * The x property
     */
    x?: Json | undefined;
}
