import {WindowsUpdateActiveHoursInstall, WindowsUpdateInstallScheduleType, WindowsUpdateScheduledInstall} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUpdateInstallScheduleType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.windowsUpdateActiveHoursInstall":
                    return new WindowsUpdateActiveHoursInstall();
                case "#microsoft.graph.windowsUpdateScheduledInstall":
                    return new WindowsUpdateScheduledInstall();
            }
        }
    }
    return new WindowsUpdateInstallScheduleType();
}
