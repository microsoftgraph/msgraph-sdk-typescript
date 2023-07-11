import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ComplexPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The iNum property
     */
    iNum?: Json | undefined;
    /**
     * The realNum property
     */
    realNum?: Json | undefined;
    /**
     * The suffix property
     */
    suffix?: Json | undefined;
}
