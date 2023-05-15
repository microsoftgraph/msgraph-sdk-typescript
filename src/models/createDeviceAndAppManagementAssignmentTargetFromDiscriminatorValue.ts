import {deserializeIntoAllDevicesAssignmentTarget} from './deserializeIntoAllDevicesAssignmentTarget';
import {deserializeIntoAllLicensedUsersAssignmentTarget} from './deserializeIntoAllLicensedUsersAssignmentTarget';
import {deserializeIntoConfigurationManagerCollectionAssignmentTarget} from './deserializeIntoConfigurationManagerCollectionAssignmentTarget';
import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {deserializeIntoExclusionGroupAssignmentTarget} from './deserializeIntoExclusionGroupAssignmentTarget';
import {deserializeIntoGroupAssignmentTarget} from './deserializeIntoGroupAssignmentTarget';
import {AllDevicesAssignmentTarget, AllLicensedUsersAssignmentTarget, ConfigurationManagerCollectionAssignmentTarget, DeviceAndAppManagementAssignmentTarget, ExclusionGroupAssignmentTarget, GroupAssignmentTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.allDevicesAssignmentTarget":
                    return deserializeIntoAllDevicesAssignmentTarget;
                case "#microsoft.graph.allLicensedUsersAssignmentTarget":
                    return deserializeIntoAllLicensedUsersAssignmentTarget;
                case "#microsoft.graph.configurationManagerCollectionAssignmentTarget":
                    return deserializeIntoConfigurationManagerCollectionAssignmentTarget;
                case "#microsoft.graph.exclusionGroupAssignmentTarget":
                    return deserializeIntoExclusionGroupAssignmentTarget;
                case "#microsoft.graph.groupAssignmentTarget":
                    return deserializeIntoGroupAssignmentTarget;
            }
        }
    }
    return deserializeIntoDeviceAndAppManagementAssignmentTarget;
}
