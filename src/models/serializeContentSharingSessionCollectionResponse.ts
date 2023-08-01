import type {ContentSharingSession} from './contentSharingSession';
import type {ContentSharingSessionCollectionResponse} from './contentSharingSessionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContentSharingSession} from './serializeContentSharingSession';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentSharingSessionCollectionResponse(writer: SerializationWriter, contentSharingSessionCollectionResponse: ContentSharingSessionCollectionResponse | undefined = {} as ContentSharingSessionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contentSharingSessionCollectionResponse)
        writer.writeCollectionOfObjectValues<ContentSharingSession>("value", contentSharingSessionCollectionResponse.value, serializeContentSharingSession);
}
