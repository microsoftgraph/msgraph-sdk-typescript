import {createDeviceManagementPartnerAssignmentFromDiscriminatorValue} from './createDeviceManagementPartnerAssignmentFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceManagementPartner} from './deviceManagementPartner';
import {DeviceManagementPartnerAppType} from './deviceManagementPartnerAppType';
import {DeviceManagementPartnerAssignment} from './deviceManagementPartnerAssignment';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {serializeDeviceManagementPartnerAssignment} from './serializeDeviceManagementPartnerAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementPartner(deviceManagementPartner: DeviceManagementPartner | undefined = {} as DeviceManagementPartner) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementPartner),
        "displayName": n => { deviceManagementPartner.displayName = n.getStringValue(); },
        "groupsRequiringPartnerEnrollment": n => { deviceManagementPartner.groupsRequiringPartnerEnrollment = n.getCollectionOfObjectValues<DeviceManagementPartnerAssignment>(createDeviceManagementPartnerAssignmentFromDiscriminatorValue); },
        "isConfigured": n => { deviceManagementPartner.isConfigured = n.getBooleanValue(); },
        "lastHeartbeatDateTime": n => { deviceManagementPartner.lastHeartbeatDateTime = n.getDateValue(); },
        "partnerAppType": n => { deviceManagementPartner.partnerAppType = n.getEnumValue<DeviceManagementPartnerAppType>(DeviceManagementPartnerAppType); },
        "partnerState": n => { deviceManagementPartner.partnerState = n.getEnumValue<DeviceManagementPartnerTenantState>(DeviceManagementPartnerTenantState); },
        "singleTenantAppId": n => { deviceManagementPartner.singleTenantAppId = n.getStringValue(); },
        "whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime": n => { deviceManagementPartner.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime = n.getDateValue(); },
        "whenPartnerDevicesWillBeRemovedDateTime": n => { deviceManagementPartner.whenPartnerDevicesWillBeRemovedDateTime = n.getDateValue(); },
    }
}
