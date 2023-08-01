import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The comment property
     */
    comment?: string | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The reference property
     */
    reference?: Json | undefined;
}
