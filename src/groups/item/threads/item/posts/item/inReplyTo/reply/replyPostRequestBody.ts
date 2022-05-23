import {Post} from '../../../../../../../../models/post';

export interface ReplyPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The Post property */
    post?:Post | undefined;
}
