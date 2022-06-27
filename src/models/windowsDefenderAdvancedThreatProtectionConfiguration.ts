import {DeviceConfiguration} from './deviceConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDefenderAdvancedThreatProtectionConfiguration extends Partial<AdditionalDataHolder>, DeviceConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Windows Defender AdvancedThreatProtection 'Allow Sample Sharing' Rule */
    allowSampleSharing?: boolean | undefined;
    /** Expedite Windows Defender Advanced Threat Protection telemetry reporting frequency. */
    enableExpeditedTelemetryReporting?: boolean | undefined;
}
