import { type Post } from './post';
import { type PostCollectionResponse } from './postCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializePost } from './serializePost';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePostCollectionResponse(writer: SerializationWriter, postCollectionResponse: PostCollectionResponse | undefined = {} as PostCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, postCollectionResponse)
        writer.writeCollectionOfObjectValues<Post>("value", postCollectionResponse.value, serializePost);
}
