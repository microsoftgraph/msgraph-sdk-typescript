import {MobileAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosVppAppAssignmentSettings extends MobileAppAssignmentSettings implements Parsable {
    /** Whether or not to use device licensing. */
    private _useDeviceLicensing?: boolean | undefined;
    /** The VPN Configuration Id to apply for this app. */
    private _vpnConfigurationId?: string | undefined;
    /**
     * Instantiates a new IosVppAppAssignmentSettings and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosVppAppAssignmentSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "useDeviceLicensing": n => { this.useDeviceLicensing = n.getBooleanValue(); },
            "vpnConfigurationId": n => { this.vpnConfigurationId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("useDeviceLicensing", this.useDeviceLicensing);
        writer.writeStringValue("vpnConfigurationId", this.vpnConfigurationId);
    };
    /**
     * Gets the useDeviceLicensing property value. Whether or not to use device licensing.
     * @returns a boolean
     */
    public get useDeviceLicensing() {
        return this._useDeviceLicensing;
    };
    /**
     * Sets the useDeviceLicensing property value. Whether or not to use device licensing.
     * @param value Value to set for the useDeviceLicensing property.
     */
    public set useDeviceLicensing(value: boolean | undefined) {
        this._useDeviceLicensing = value;
    };
    /**
     * Gets the vpnConfigurationId property value. The VPN Configuration Id to apply for this app.
     * @returns a string
     */
    public get vpnConfigurationId() {
        return this._vpnConfigurationId;
    };
    /**
     * Sets the vpnConfigurationId property value. The VPN Configuration Id to apply for this app.
     * @param value Value to set for the vpnConfigurationId property.
     */
    public set vpnConfigurationId(value: string | undefined) {
        this._vpnConfigurationId = value;
    };
}
