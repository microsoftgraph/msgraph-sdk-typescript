import {ContentSharingSession} from './contentSharingSession';
import {ContentSharingSessionCollectionResponse} from './contentSharingSessionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContentSharingSession} from './serializeContentSharingSession';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentSharingSessionCollectionResponse(contentSharingSessionCollectionResponse: ContentSharingSessionCollectionResponse | undefined = {} as ContentSharingSessionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contentSharingSessionCollectionResponse)
        writer.writeCollectionOfObjectValues<ContentSharingSession>("value", contentSharingSessionCollectionResponse.value, serializeContentSharingSession);
}
