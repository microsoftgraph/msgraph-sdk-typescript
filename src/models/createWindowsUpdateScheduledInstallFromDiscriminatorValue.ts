import { deserializeIntoWindowsUpdateScheduledInstall } from './deserializeIntoWindowsUpdateScheduledInstall';
import { type WindowsUpdateScheduledInstall } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsUpdateScheduledInstallFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUpdateScheduledInstall;
}
