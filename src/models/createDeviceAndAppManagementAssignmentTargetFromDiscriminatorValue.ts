import {AllDevicesAssignmentTarget, AllLicensedUsersAssignmentTarget, ConfigurationManagerCollectionAssignmentTarget, DeviceAndAppManagementAssignmentTarget, ExclusionGroupAssignmentTarget, GroupAssignmentTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementAssignmentTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.allDevicesAssignmentTarget":
                    return new AllDevicesAssignmentTarget();
                case "#microsoft.graph.allLicensedUsersAssignmentTarget":
                    return new AllLicensedUsersAssignmentTarget();
                case "#microsoft.graph.configurationManagerCollectionAssignmentTarget":
                    return new ConfigurationManagerCollectionAssignmentTarget();
                case "#microsoft.graph.exclusionGroupAssignmentTarget":
                    return new ExclusionGroupAssignmentTarget();
                case "#microsoft.graph.groupAssignmentTarget":
                    return new GroupAssignmentTarget();
            }
        }
    }
    return new DeviceAndAppManagementAssignmentTarget();
}
