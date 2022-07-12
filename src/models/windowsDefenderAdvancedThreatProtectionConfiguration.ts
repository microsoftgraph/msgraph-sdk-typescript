import {DeviceConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsDefenderAdvancedThreatProtectionConfiguration extends DeviceConfiguration implements Parsable {
    /** Windows Defender AdvancedThreatProtection 'Allow Sample Sharing' Rule */
    private _allowSampleSharing?: boolean | undefined;
    /** Expedite Windows Defender Advanced Threat Protection telemetry reporting frequency. */
    private _enableExpeditedTelemetryReporting?: boolean | undefined;
    /**
     * Gets the allowSampleSharing property value. Windows Defender AdvancedThreatProtection 'Allow Sample Sharing' Rule
     * @returns a boolean
     */
    public get allowSampleSharing() {
        return this._allowSampleSharing;
    };
    /**
     * Sets the allowSampleSharing property value. Windows Defender AdvancedThreatProtection 'Allow Sample Sharing' Rule
     * @param value Value to set for the allowSampleSharing property.
     */
    public set allowSampleSharing(value: boolean | undefined) {
        this._allowSampleSharing = value;
    };
    /**
     * Instantiates a new WindowsDefenderAdvancedThreatProtectionConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the enableExpeditedTelemetryReporting property value. Expedite Windows Defender Advanced Threat Protection telemetry reporting frequency.
     * @returns a boolean
     */
    public get enableExpeditedTelemetryReporting() {
        return this._enableExpeditedTelemetryReporting;
    };
    /**
     * Sets the enableExpeditedTelemetryReporting property value. Expedite Windows Defender Advanced Threat Protection telemetry reporting frequency.
     * @param value Value to set for the enableExpeditedTelemetryReporting property.
     */
    public set enableExpeditedTelemetryReporting(value: boolean | undefined) {
        this._enableExpeditedTelemetryReporting = value;
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
        writer.writeBooleanValue("allowSampleSharing", this.allowSampleSharing);
        writer.writeBooleanValue("enableExpeditedTelemetryReporting", this.enableExpeditedTelemetryReporting);
    };
}
