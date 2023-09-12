import { deserializeIntoDeviceConfiguration } from './deserializeIntoDeviceConfiguration';
import { type WindowsDefenderAdvancedThreatProtectionConfiguration } from './windowsDefenderAdvancedThreatProtectionConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration(windowsDefenderAdvancedThreatProtectionConfiguration: WindowsDefenderAdvancedThreatProtectionConfiguration | undefined = {} as WindowsDefenderAdvancedThreatProtectionConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windowsDefenderAdvancedThreatProtectionConfiguration),
        "allowSampleSharing": n => { windowsDefenderAdvancedThreatProtectionConfiguration.allowSampleSharing = n.getBooleanValue(); },
        "enableExpeditedTelemetryReporting": n => { windowsDefenderAdvancedThreatProtectionConfiguration.enableExpeditedTelemetryReporting = n.getBooleanValue(); },
    }
}
