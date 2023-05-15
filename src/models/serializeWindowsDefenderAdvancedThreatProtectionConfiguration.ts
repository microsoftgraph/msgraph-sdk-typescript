import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {WindowsDefenderAdvancedThreatProtectionConfiguration} from './windowsDefenderAdvancedThreatProtectionConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderAdvancedThreatProtectionConfiguration(writer: SerializationWriter, windowsDefenderAdvancedThreatProtectionConfiguration: WindowsDefenderAdvancedThreatProtectionConfiguration | undefined = {} as WindowsDefenderAdvancedThreatProtectionConfiguration) : void {
        serializeDeviceConfiguration(writer, windowsDefenderAdvancedThreatProtectionConfiguration)
        writer.writeBooleanValue("allowSampleSharing", windowsDefenderAdvancedThreatProtectionConfiguration.allowSampleSharing);
        writer.writeBooleanValue("enableExpeditedTelemetryReporting", windowsDefenderAdvancedThreatProtectionConfiguration.enableExpeditedTelemetryReporting);
}
