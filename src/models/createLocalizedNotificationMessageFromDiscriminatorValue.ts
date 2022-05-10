import {LocalizedNotificationMessageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedNotificationMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedNotificationMessageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedNotificationMessageImpl();
}
