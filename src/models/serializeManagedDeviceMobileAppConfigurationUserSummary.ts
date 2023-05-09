import {ManagedDeviceMobileAppConfigurationUserSummary} from './managedDeviceMobileAppConfigurationUserSummary';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationUserSummary(writer: SerializationWriter, managedDeviceMobileAppConfigurationUserSummary: ManagedDeviceMobileAppConfigurationUserSummary | undefined = {} as ManagedDeviceMobileAppConfigurationUserSummary) : void {
        serializeEntity(writer, managedDeviceMobileAppConfigurationUserSummary)
        writer.writeNumberValue("configurationVersion", managedDeviceMobileAppConfigurationUserSummary.configurationVersion);
        writer.writeNumberValue("errorCount", managedDeviceMobileAppConfigurationUserSummary.errorCount);
        writer.writeNumberValue("failedCount", managedDeviceMobileAppConfigurationUserSummary.failedCount);
        writer.writeDateValue("lastUpdateDateTime", managedDeviceMobileAppConfigurationUserSummary.lastUpdateDateTime);
        writer.writeNumberValue("notApplicableCount", managedDeviceMobileAppConfigurationUserSummary.notApplicableCount);
        writer.writeNumberValue("pendingCount", managedDeviceMobileAppConfigurationUserSummary.pendingCount);
        writer.writeNumberValue("successCount", managedDeviceMobileAppConfigurationUserSummary.successCount);
}
