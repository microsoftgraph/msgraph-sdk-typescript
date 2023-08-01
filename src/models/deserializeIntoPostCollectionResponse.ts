import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {Post} from './post';
import type {PostCollectionResponse} from './postCollectionResponse';
import {serializePost} from './serializePost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPostCollectionResponse(postCollectionResponse: PostCollectionResponse | undefined = {} as PostCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(postCollectionResponse),
        "value": n => { postCollectionResponse.value = n.getCollectionOfObjectValues<Post>(createPostFromDiscriminatorValue); },
    }
}
