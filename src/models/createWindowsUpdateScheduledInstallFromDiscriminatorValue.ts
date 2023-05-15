import {deserializeIntoWindowsUpdateScheduledInstall} from './deserializeIntoWindowsUpdateScheduledInstall';
import {WindowsUpdateScheduledInstall} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateScheduledInstallFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUpdateScheduledInstall;
}
