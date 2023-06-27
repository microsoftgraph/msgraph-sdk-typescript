import {SearchRequest} from '../../models/searchRequest';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface QueryPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The requests property
     */
    requests?: SearchRequest[] | undefined;
}
