import {createLocalizedNotificationMessageFromDiscriminatorValue} from './createLocalizedNotificationMessageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {LocalizedNotificationMessage} from './localizedNotificationMessage';
import type {LocalizedNotificationMessageCollectionResponse} from './localizedNotificationMessageCollectionResponse';
import {serializeLocalizedNotificationMessage} from './serializeLocalizedNotificationMessage';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedNotificationMessageCollectionResponse(localizedNotificationMessageCollectionResponse: LocalizedNotificationMessageCollectionResponse | undefined = {} as LocalizedNotificationMessageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(localizedNotificationMessageCollectionResponse),
        "value": n => { localizedNotificationMessageCollectionResponse.value = n.getCollectionOfObjectValues<LocalizedNotificationMessage>(createLocalizedNotificationMessageFromDiscriminatorValue); },
    }
}
