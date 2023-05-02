import {Json} from '../../../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The seriesBy property */
    seriesBy?: string | undefined;
    /** The sourceData property */
    sourceData?: Json | undefined;
    /** The type property */
    type?: string | undefined;
}
