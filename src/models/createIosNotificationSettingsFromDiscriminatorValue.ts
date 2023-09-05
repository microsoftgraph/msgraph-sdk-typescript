import { deserializeIntoIosNotificationSettings } from './deserializeIntoIosNotificationSettings';
import { type IosNotificationSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosNotificationSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosNotificationSettings;
}
