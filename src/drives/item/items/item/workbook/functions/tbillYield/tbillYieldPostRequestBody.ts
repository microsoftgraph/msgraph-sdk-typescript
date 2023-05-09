import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TbillYieldPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The maturity property */
    maturity?: Json | undefined;
    /** The pr property */
    pr?: Json | undefined;
    /** The settlement property */
    settlement?: Json | undefined;
}
