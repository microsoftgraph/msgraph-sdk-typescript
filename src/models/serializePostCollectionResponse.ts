import {Post} from './post';
import {PostCollectionResponse} from './postCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePost} from './serializePost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePostCollectionResponse(writer: SerializationWriter, postCollectionResponse: PostCollectionResponse | undefined = {} as PostCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, postCollectionResponse)
        writer.writeCollectionOfObjectValues<Post>("value", postCollectionResponse.value, serializePost);
}
