import {ComplianceStatus} from './complianceStatus';
import {ManagedDeviceMobileAppConfigurationUserStatus} from './managedDeviceMobileAppConfigurationUserStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationUserStatus(writer: SerializationWriter, managedDeviceMobileAppConfigurationUserStatus: ManagedDeviceMobileAppConfigurationUserStatus | undefined = {} as ManagedDeviceMobileAppConfigurationUserStatus) : void {
        serializeEntity(writer, managedDeviceMobileAppConfigurationUserStatus)
        writer.writeNumberValue("devicesCount", managedDeviceMobileAppConfigurationUserStatus.devicesCount);
        writer.writeDateValue("lastReportedDateTime", managedDeviceMobileAppConfigurationUserStatus.lastReportedDateTime);
        writer.writeEnumValue<ComplianceStatus>("status", managedDeviceMobileAppConfigurationUserStatus.status);
        writer.writeStringValue("userDisplayName", managedDeviceMobileAppConfigurationUserStatus.userDisplayName);
        writer.writeStringValue("userPrincipalName", managedDeviceMobileAppConfigurationUserStatus.userPrincipalName);
}
