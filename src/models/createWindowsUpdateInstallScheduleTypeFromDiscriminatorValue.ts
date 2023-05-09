import {deserializeIntoWindowsUpdateActiveHoursInstall} from './deserializeIntoWindowsUpdateActiveHoursInstall';
import {deserializeIntoWindowsUpdateInstallScheduleType} from './deserializeIntoWindowsUpdateInstallScheduleType';
import {deserializeIntoWindowsUpdateScheduledInstall} from './deserializeIntoWindowsUpdateScheduledInstall';
import {WindowsUpdateActiveHoursInstall, WindowsUpdateInstallScheduleType, WindowsUpdateScheduledInstall} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.windowsUpdateActiveHoursInstall":
                    return deserializeIntoWindowsUpdateActiveHoursInstall;
                case "#microsoft.graph.windowsUpdateScheduledInstall":
                    return deserializeIntoWindowsUpdateScheduledInstall;
            }
        }
    }
    return deserializeIntoWindowsUpdateInstallScheduleType;
}
