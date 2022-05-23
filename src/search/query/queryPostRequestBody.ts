import {SearchRequest} from '../../models/searchRequest';

export interface QueryPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The requests property */
    requests?:SearchRequest[] | undefined;
}
