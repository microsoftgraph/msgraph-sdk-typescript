import {IosNotificationSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosNotificationSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosNotificationSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosNotificationSettingsImpl();
}
