import { type LocalizedNotificationMessage } from './localizedNotificationMessage';
import { type LocalizedNotificationMessageCollectionResponse } from './localizedNotificationMessageCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeLocalizedNotificationMessage } from './serializeLocalizedNotificationMessage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLocalizedNotificationMessageCollectionResponse(writer: SerializationWriter, localizedNotificationMessageCollectionResponse: LocalizedNotificationMessageCollectionResponse | undefined = {} as LocalizedNotificationMessageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, localizedNotificationMessageCollectionResponse)
        writer.writeCollectionOfObjectValues<LocalizedNotificationMessage>("value", localizedNotificationMessageCollectionResponse.value, serializeLocalizedNotificationMessage);
}
