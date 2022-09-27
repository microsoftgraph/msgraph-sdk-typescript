import {ChangeNotificationEncryptedContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeNotificationEncryptedContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeNotificationEncryptedContent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangeNotificationEncryptedContent();
}
