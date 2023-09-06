import { type ManagedDeviceMobileAppConfigurationDeviceSummary } from './managedDeviceMobileAppConfigurationDeviceSummary';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationDeviceSummary(writer: SerializationWriter, managedDeviceMobileAppConfigurationDeviceSummary: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined = {} as ManagedDeviceMobileAppConfigurationDeviceSummary) : void {
        serializeEntity(writer, managedDeviceMobileAppConfigurationDeviceSummary)
        writer.writeNumberValue("configurationVersion", managedDeviceMobileAppConfigurationDeviceSummary.configurationVersion);
        writer.writeNumberValue("errorCount", managedDeviceMobileAppConfigurationDeviceSummary.errorCount);
        writer.writeNumberValue("failedCount", managedDeviceMobileAppConfigurationDeviceSummary.failedCount);
        writer.writeDateValue("lastUpdateDateTime", managedDeviceMobileAppConfigurationDeviceSummary.lastUpdateDateTime);
        writer.writeNumberValue("notApplicableCount", managedDeviceMobileAppConfigurationDeviceSummary.notApplicableCount);
        writer.writeNumberValue("pendingCount", managedDeviceMobileAppConfigurationDeviceSummary.pendingCount);
        writer.writeNumberValue("successCount", managedDeviceMobileAppConfigurationDeviceSummary.successCount);
}
