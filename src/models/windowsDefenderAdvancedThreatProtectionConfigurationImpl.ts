import {DeviceConfigurationImpl} from './index';
import {WindowsDefenderAdvancedThreatProtectionConfiguration} from './windowsDefenderAdvancedThreatProtectionConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsDefenderAdvancedThreatProtectionConfigurationImpl extends DeviceConfigurationImpl implements WindowsDefenderAdvancedThreatProtectionConfiguration {
    /** Windows Defender AdvancedThreatProtection 'Allow Sample Sharing' Rule */
    public allowSampleSharing?: boolean | undefined;
    /** Expedite Windows Defender Advanced Threat Protection telemetry reporting frequency. */
    public enableExpeditedTelemetryReporting?: boolean | undefined;
    /**
     * Instantiates a new WindowsDefenderAdvancedThreatProtectionConfiguration and sets the default values.
     * @param windowsDefenderAdvancedThreatProtectionConfigurationParameterValue 
     */
    public constructor(windowsDefenderAdvancedThreatProtectionConfigurationParameterValue?: WindowsDefenderAdvancedThreatProtectionConfiguration | undefined) {
        super(windowsDefenderAdvancedThreatProtectionConfigurationParameterValue);
        this.allowSampleSharing = windowsDefenderAdvancedThreatProtectionConfigurationParameterValue?.allowSampleSharing;
        this.enableExpeditedTelemetryReporting = windowsDefenderAdvancedThreatProtectionConfigurationParameterValue?.enableExpeditedTelemetryReporting;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowSampleSharing": n => { this.allowSampleSharing = n.getBooleanValue(); },
            "enableExpeditedTelemetryReporting": n => { this.enableExpeditedTelemetryReporting = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowSampleSharing){
            writer.writeBooleanValue("allowSampleSharing", this.allowSampleSharing);
        }
        if(this.enableExpeditedTelemetryReporting){
            writer.writeBooleanValue("enableExpeditedTelemetryReporting", this.enableExpeditedTelemetryReporting);
        }
    };
}
