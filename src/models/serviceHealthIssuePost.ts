import {ItemBody} from './itemBody';
import {PostType} from './postType';

export interface ServiceHealthIssuePost{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The published time of the post. */
    createdDateTime?:Date | undefined;
    /** The content of the service issue post. */
    description?:ItemBody | undefined;
    /** The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue. */
    postType?:PostType | undefined;
}
