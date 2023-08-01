import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LogNorm_InvPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The mean property
     */
    mean?: Json | undefined;
    /**
     * The probability property
     */
    probability?: Json | undefined;
    /**
     * The standardDev property
     */
    standardDev?: Json | undefined;
}
