import { deserializeIntoWindowsUpdateActiveHoursInstall } from './deserializeIntoWindowsUpdateActiveHoursInstall';
import { type WindowsUpdateActiveHoursInstall } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsUpdateActiveHoursInstallFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUpdateActiveHoursInstall;
}
