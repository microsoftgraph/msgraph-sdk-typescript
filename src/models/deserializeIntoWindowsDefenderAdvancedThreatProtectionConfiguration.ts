import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {WindowsDefenderAdvancedThreatProtectionConfiguration} from './windowsDefenderAdvancedThreatProtectionConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration(windowsDefenderAdvancedThreatProtectionConfiguration: WindowsDefenderAdvancedThreatProtectionConfiguration | undefined = {} as WindowsDefenderAdvancedThreatProtectionConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windowsDefenderAdvancedThreatProtectionConfiguration),
        "allowSampleSharing": n => { windowsDefenderAdvancedThreatProtectionConfiguration.allowSampleSharing = n.getBooleanValue(); },
        "enableExpeditedTelemetryReporting": n => { windowsDefenderAdvancedThreatProtectionConfiguration.enableExpeditedTelemetryReporting = n.getBooleanValue(); },
    }
}
