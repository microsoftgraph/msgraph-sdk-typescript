import {MobileAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosStoreAppAssignmentSettings extends MobileAppAssignmentSettings implements Parsable {
    /** The VPN Configuration Id to apply for this app. */
    private _vpnConfigurationId?: string | undefined;
    /**
     * Instantiates a new IosStoreAppAssignmentSettings and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosStoreAppAssignmentSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        writer.writeStringValue("vpnConfigurationId", this.vpnConfigurationId);
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
