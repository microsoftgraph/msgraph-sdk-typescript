import {DeviceConfiguration} from './deviceConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDefenderAdvancedThreatProtectionConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Windows Defender AdvancedThreatProtection 'Allow Sample Sharing' Rule
     */
    allowSampleSharing?: boolean | undefined;
    /**
     * Expedite Windows Defender Advanced Threat Protection telemetry reporting frequency.
     */
    enableExpeditedTelemetryReporting?: boolean | undefined;
}
