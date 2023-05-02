import {createLocalizedNotificationMessageFromDiscriminatorValue} from './createLocalizedNotificationMessageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {LocalizedNotificationMessageCollectionResponse} from './localizedNotificationMessageCollectionResponse';
import {serializeLocalizedNotificationMessage} from './serializeLocalizedNotificationMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedNotificationMessageCollectionResponse(localizedNotificationMessageCollectionResponse: LocalizedNotificationMessageCollectionResponse | undefined = {} as LocalizedNotificationMessageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(localizedNotificationMessageCollectionResponse),
        "value": n => { localizedNotificationMessageCollectionResponse.value = n.getCollectionOfObjectValues<LocalizedNotificationMessage>(createLocalizedNotificationMessageFromDiscriminatorValue); },
    }
}
