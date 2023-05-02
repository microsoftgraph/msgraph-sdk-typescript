import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BitlshiftPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The number property */
    number?: Json | undefined;
    /** The shiftAmount property */
    shiftAmount?: Json | undefined;
}
