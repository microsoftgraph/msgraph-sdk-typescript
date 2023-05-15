import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedDeviceMobileAppConfigurationUserSummary} from './managedDeviceMobileAppConfigurationUserSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationUserSummary(managedDeviceMobileAppConfigurationUserSummary: ManagedDeviceMobileAppConfigurationUserSummary | undefined = {} as ManagedDeviceMobileAppConfigurationUserSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationUserSummary),
        "configurationVersion": n => { managedDeviceMobileAppConfigurationUserSummary.configurationVersion = n.getNumberValue(); },
        "errorCount": n => { managedDeviceMobileAppConfigurationUserSummary.errorCount = n.getNumberValue(); },
        "failedCount": n => { managedDeviceMobileAppConfigurationUserSummary.failedCount = n.getNumberValue(); },
        "lastUpdateDateTime": n => { managedDeviceMobileAppConfigurationUserSummary.lastUpdateDateTime = n.getDateValue(); },
        "notApplicableCount": n => { managedDeviceMobileAppConfigurationUserSummary.notApplicableCount = n.getNumberValue(); },
        "pendingCount": n => { managedDeviceMobileAppConfigurationUserSummary.pendingCount = n.getNumberValue(); },
        "successCount": n => { managedDeviceMobileAppConfigurationUserSummary.successCount = n.getNumberValue(); },
    }
}
