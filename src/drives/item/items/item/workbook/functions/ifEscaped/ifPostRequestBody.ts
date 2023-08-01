import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IfPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The logicalTest property
     */
    logicalTest?: Json | undefined;
    /**
     * The valueIfFalse property
     */
    valueIfFalse?: Json | undefined;
    /**
     * The valueIfTrue property
     */
    valueIfTrue?: Json | undefined;
}
