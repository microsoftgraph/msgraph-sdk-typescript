import {WindowsUpdateInstallScheduleTypeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUpdateInstallScheduleTypeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUpdateInstallScheduleTypeImpl();
}
