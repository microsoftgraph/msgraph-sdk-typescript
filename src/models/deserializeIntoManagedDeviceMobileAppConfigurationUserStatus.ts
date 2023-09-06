import { ComplianceStatus } from './complianceStatus';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ManagedDeviceMobileAppConfigurationUserStatus } from './managedDeviceMobileAppConfigurationUserStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationUserStatus(managedDeviceMobileAppConfigurationUserStatus: ManagedDeviceMobileAppConfigurationUserStatus | undefined = {} as ManagedDeviceMobileAppConfigurationUserStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationUserStatus),
        "devicesCount": n => { managedDeviceMobileAppConfigurationUserStatus.devicesCount = n.getNumberValue(); },
        "lastReportedDateTime": n => { managedDeviceMobileAppConfigurationUserStatus.lastReportedDateTime = n.getDateValue(); },
        "status": n => { managedDeviceMobileAppConfigurationUserStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userDisplayName": n => { managedDeviceMobileAppConfigurationUserStatus.userDisplayName = n.getStringValue(); },
        "userPrincipalName": n => { managedDeviceMobileAppConfigurationUserStatus.userPrincipalName = n.getStringValue(); },
    }
}
