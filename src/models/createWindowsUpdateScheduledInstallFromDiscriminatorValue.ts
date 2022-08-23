import {WindowsUpdateScheduledInstall} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateScheduledInstallFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUpdateScheduledInstall {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUpdateScheduledInstall();
}
