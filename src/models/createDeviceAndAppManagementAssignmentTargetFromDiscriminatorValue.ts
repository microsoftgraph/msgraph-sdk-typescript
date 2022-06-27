import {AllDevicesAssignmentTargetImpl, AllLicensedUsersAssignmentTargetImpl, ConfigurationManagerCollectionAssignmentTargetImpl, DeviceAndAppManagementAssignmentTargetImpl, GroupAssignmentTargetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementAssignmentTargetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.allDevicesAssignmentTarget":
                    return new AllDevicesAssignmentTargetImpl();
                case "#microsoft.graph.allLicensedUsersAssignmentTarget":
                    return new AllLicensedUsersAssignmentTargetImpl();
                case "#microsoft.graph.configurationManagerCollectionAssignmentTarget":
                    return new ConfigurationManagerCollectionAssignmentTargetImpl();
                case "#microsoft.graph.groupAssignmentTarget":
                    return new GroupAssignmentTargetImpl();
            }
        }
    }
    return new DeviceAndAppManagementAssignmentTargetImpl();
}
