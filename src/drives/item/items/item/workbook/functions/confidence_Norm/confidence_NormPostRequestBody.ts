import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Confidence_NormPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The alpha property
     */
    alpha?: Json | undefined;
    /**
     * The size property
     */
    size?: Json | undefined;
    /**
     * The standardDev property
     */
    standardDev?: Json | undefined;
}
