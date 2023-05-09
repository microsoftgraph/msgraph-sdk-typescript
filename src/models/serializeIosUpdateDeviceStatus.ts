import {ComplianceStatus} from './complianceStatus';
import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {IosUpdatesInstallStatus} from './iosUpdatesInstallStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosUpdateDeviceStatus(writer: SerializationWriter, iosUpdateDeviceStatus: IosUpdateDeviceStatus | undefined = {} as IosUpdateDeviceStatus) : void {
        serializeEntity(writer, iosUpdateDeviceStatus)
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", iosUpdateDeviceStatus.complianceGracePeriodExpirationDateTime);
        writer.writeStringValue("deviceDisplayName", iosUpdateDeviceStatus.deviceDisplayName);
        writer.writeStringValue("deviceId", iosUpdateDeviceStatus.deviceId);
        writer.writeStringValue("deviceModel", iosUpdateDeviceStatus.deviceModel);
        writer.writeEnumValue<IosUpdatesInstallStatus>("installStatus", iosUpdateDeviceStatus.installStatus);
        writer.writeDateValue("lastReportedDateTime", iosUpdateDeviceStatus.lastReportedDateTime);
        writer.writeStringValue("osVersion", iosUpdateDeviceStatus.osVersion);
        writer.writeEnumValue<ComplianceStatus>("status", iosUpdateDeviceStatus.status);
        writer.writeStringValue("userId", iosUpdateDeviceStatus.userId);
        writer.writeStringValue("userName", iosUpdateDeviceStatus.userName);
        writer.writeStringValue("userPrincipalName", iosUpdateDeviceStatus.userPrincipalName);
}
