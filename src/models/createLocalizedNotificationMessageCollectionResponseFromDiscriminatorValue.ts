import { deserializeIntoLocalizedNotificationMessageCollectionResponse } from './deserializeIntoLocalizedNotificationMessageCollectionResponse';
import { type LocalizedNotificationMessageCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocalizedNotificationMessageCollectionResponse;
}
