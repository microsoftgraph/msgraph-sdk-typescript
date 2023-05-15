import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {LocalizedNotificationMessageCollectionResponse} from './localizedNotificationMessageCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLocalizedNotificationMessage} from './serializeLocalizedNotificationMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedNotificationMessageCollectionResponse(writer: SerializationWriter, localizedNotificationMessageCollectionResponse: LocalizedNotificationMessageCollectionResponse | undefined = {} as LocalizedNotificationMessageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, localizedNotificationMessageCollectionResponse)
        writer.writeCollectionOfObjectValues<LocalizedNotificationMessage>("value", localizedNotificationMessageCollectionResponse.value, serializeLocalizedNotificationMessage);
}
