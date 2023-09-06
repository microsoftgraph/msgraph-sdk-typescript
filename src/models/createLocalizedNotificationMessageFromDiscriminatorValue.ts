import { deserializeIntoLocalizedNotificationMessage } from './deserializeIntoLocalizedNotificationMessage';
import { type LocalizedNotificationMessage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLocalizedNotificationMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocalizedNotificationMessage;
}
