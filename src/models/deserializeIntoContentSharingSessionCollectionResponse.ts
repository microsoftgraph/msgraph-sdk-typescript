import { type ContentSharingSession } from './contentSharingSession';
import { type ContentSharingSessionCollectionResponse } from './contentSharingSessionCollectionResponse';
import { createContentSharingSessionFromDiscriminatorValue } from './createContentSharingSessionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeContentSharingSession } from './serializeContentSharingSession';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoContentSharingSessionCollectionResponse(contentSharingSessionCollectionResponse: ContentSharingSessionCollectionResponse | undefined = {} as ContentSharingSessionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contentSharingSessionCollectionResponse),
        "value": n => { contentSharingSessionCollectionResponse.value = n.getCollectionOfObjectValues<ContentSharingSession>(createContentSharingSessionFromDiscriminatorValue); },
    }
}
