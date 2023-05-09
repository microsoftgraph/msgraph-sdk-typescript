import {DeviceManagementPartner} from './deviceManagementPartner';
import {DeviceManagementPartnerAppType} from './deviceManagementPartnerAppType';
import {DeviceManagementPartnerAssignment} from './deviceManagementPartnerAssignment';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {serializeDeviceManagementPartnerAssignment} from './serializeDeviceManagementPartnerAssignment';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementPartner(writer: SerializationWriter, deviceManagementPartner: DeviceManagementPartner | undefined = {} as DeviceManagementPartner) : void {
        serializeEntity(writer, deviceManagementPartner)
        writer.writeStringValue("displayName", deviceManagementPartner.displayName);
        writer.writeCollectionOfObjectValues<DeviceManagementPartnerAssignment>("groupsRequiringPartnerEnrollment", deviceManagementPartner.groupsRequiringPartnerEnrollment, serializeDeviceManagementPartnerAssignment);
        writer.writeBooleanValue("isConfigured", deviceManagementPartner.isConfigured);
        writer.writeDateValue("lastHeartbeatDateTime", deviceManagementPartner.lastHeartbeatDateTime);
        writer.writeEnumValue<DeviceManagementPartnerAppType>("partnerAppType", deviceManagementPartner.partnerAppType);
        writer.writeEnumValue<DeviceManagementPartnerTenantState>("partnerState", deviceManagementPartner.partnerState);
        writer.writeStringValue("singleTenantAppId", deviceManagementPartner.singleTenantAppId);
        writer.writeDateValue("whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime", deviceManagementPartner.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime);
        writer.writeDateValue("whenPartnerDevicesWillBeRemovedDateTime", deviceManagementPartner.whenPartnerDevicesWillBeRemovedDateTime);
}
