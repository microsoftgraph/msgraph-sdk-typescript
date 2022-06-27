import {WindowsUpdateScheduledInstallImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateScheduledInstallFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUpdateScheduledInstallImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUpdateScheduledInstallImpl();
}
