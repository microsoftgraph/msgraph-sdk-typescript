import {ContentSharingSession} from './contentSharingSession';
import {ContentSharingSessionCollectionResponse} from './contentSharingSessionCollectionResponse';
import {createContentSharingSessionFromDiscriminatorValue} from './createContentSharingSessionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeContentSharingSession} from './serializeContentSharingSession';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentSharingSessionCollectionResponse(contentSharingSessionCollectionResponse: ContentSharingSessionCollectionResponse | undefined = {} as ContentSharingSessionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contentSharingSessionCollectionResponse),
        "value": n => { contentSharingSessionCollectionResponse.value = n.getCollectionOfObjectValues<ContentSharingSession>(createContentSharingSessionFromDiscriminatorValue); },
    }
}
