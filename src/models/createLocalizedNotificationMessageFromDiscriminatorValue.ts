import {deserializeIntoLocalizedNotificationMessage} from './deserializeIntoLocalizedNotificationMessage';
import {LocalizedNotificationMessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedNotificationMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocalizedNotificationMessage;
}
