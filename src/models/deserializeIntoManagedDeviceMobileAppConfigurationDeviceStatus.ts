import { ComplianceStatus } from './complianceStatus';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ManagedDeviceMobileAppConfigurationDeviceStatus } from './managedDeviceMobileAppConfigurationDeviceStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus(managedDeviceMobileAppConfigurationDeviceStatus: ManagedDeviceMobileAppConfigurationDeviceStatus | undefined = {} as ManagedDeviceMobileAppConfigurationDeviceStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationDeviceStatus),
        "complianceGracePeriodExpirationDateTime": n => { managedDeviceMobileAppConfigurationDeviceStatus.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
        "deviceDisplayName": n => { managedDeviceMobileAppConfigurationDeviceStatus.deviceDisplayName = n.getStringValue(); },
        "deviceModel": n => { managedDeviceMobileAppConfigurationDeviceStatus.deviceModel = n.getStringValue(); },
        "lastReportedDateTime": n => { managedDeviceMobileAppConfigurationDeviceStatus.lastReportedDateTime = n.getDateValue(); },
        "status": n => { managedDeviceMobileAppConfigurationDeviceStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userName": n => { managedDeviceMobileAppConfigurationDeviceStatus.userName = n.getStringValue(); },
        "userPrincipalName": n => { managedDeviceMobileAppConfigurationDeviceStatus.userPrincipalName = n.getStringValue(); },
    }
}
