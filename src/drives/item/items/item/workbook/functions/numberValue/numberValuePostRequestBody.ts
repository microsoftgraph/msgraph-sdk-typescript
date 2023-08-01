import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface NumberValuePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The decimalSeparator property
     */
    decimalSeparator?: Json | undefined;
    /**
     * The groupSeparator property
     */
    groupSeparator?: Json | undefined;
    /**
     * The text property
     */
    text?: Json | undefined;
}
