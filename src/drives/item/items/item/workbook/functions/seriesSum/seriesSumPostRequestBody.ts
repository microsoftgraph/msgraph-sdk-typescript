import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SeriesSumPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The coefficients property
     */
    coefficients?: Json | undefined;
    /**
     * The m property
     */
    m?: Json | undefined;
    /**
     * The n property
     */
    n?: Json | undefined;
    /**
     * The x property
     */
    x?: Json | undefined;
}
