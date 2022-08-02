import {IosNotificationSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosNotificationSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosNotificationSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosNotificationSettings();
}
