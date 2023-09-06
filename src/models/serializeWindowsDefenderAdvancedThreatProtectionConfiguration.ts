import { serializeDeviceConfiguration } from './serializeDeviceConfiguration';
import { type WindowsDefenderAdvancedThreatProtectionConfiguration } from './windowsDefenderAdvancedThreatProtectionConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderAdvancedThreatProtectionConfiguration(writer: SerializationWriter, windowsDefenderAdvancedThreatProtectionConfiguration: WindowsDefenderAdvancedThreatProtectionConfiguration | undefined = {} as WindowsDefenderAdvancedThreatProtectionConfiguration) : void {
        serializeDeviceConfiguration(writer, windowsDefenderAdvancedThreatProtectionConfiguration)
        writer.writeBooleanValue("allowSampleSharing", windowsDefenderAdvancedThreatProtectionConfiguration.allowSampleSharing);
        writer.writeBooleanValue("enableExpeditedTelemetryReporting", windowsDefenderAdvancedThreatProtectionConfiguration.enableExpeditedTelemetryReporting);
}
