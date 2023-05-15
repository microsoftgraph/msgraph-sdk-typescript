import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedDeviceMobileAppConfigurationDeviceSummary} from './managedDeviceMobileAppConfigurationDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary(managedDeviceMobileAppConfigurationDeviceSummary: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined = {} as ManagedDeviceMobileAppConfigurationDeviceSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationDeviceSummary),
        "configurationVersion": n => { managedDeviceMobileAppConfigurationDeviceSummary.configurationVersion = n.getNumberValue(); },
        "errorCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.errorCount = n.getNumberValue(); },
        "failedCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.failedCount = n.getNumberValue(); },
        "lastUpdateDateTime": n => { managedDeviceMobileAppConfigurationDeviceSummary.lastUpdateDateTime = n.getDateValue(); },
        "notApplicableCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.notApplicableCount = n.getNumberValue(); },
        "pendingCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.pendingCount = n.getNumberValue(); },
        "successCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.successCount = n.getNumberValue(); },
    }
}
