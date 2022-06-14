import {WindowsUpdateInstallScheduleType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUpdateInstallScheduleType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUpdateInstallScheduleType();
}
