import {LocalizedNotificationMessageCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedNotificationMessageCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedNotificationMessageCollectionResponseImpl();
}
