import {AuthenticationMethodKeyStrength} from './authenticationMethodKeyStrength';
import {AdminMember1, AuthenticationMethod, Device} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsHelloForBusinessAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The date and time that this Windows Hello for Business key was registered. */
    private _createdDateTime?: Date | undefined;
    /** The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device. */
    private _device?: Device | AdminMember1 | undefined;
    /** The name of the device on which Windows Hello for Business is registered */
    private _displayName?: string | undefined;
    /** Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown. */
    private _keyStrength?: AuthenticationMethodKeyStrength | AdminMember1 | undefined;
    /**
     * Instantiates a new WindowsHelloForBusinessAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time that this Windows Hello for Business key was registered.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time that this Windows Hello for Business key was registered.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the device property value. The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @returns a admin
     */
    public get device() {
        return this._device;
    };
    /**
     * Sets the device property value. The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @param value Value to set for the device property.
     */
    public set device(value: Device | AdminMember1 | undefined) {
        this._device = value;
    };
    /**
     * Gets the displayName property value. The name of the device on which Windows Hello for Business is registered
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the device on which Windows Hello for Business is registered
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "device": n => { this.device = n.getObjectValue<Device>(createDeviceFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "keyStrength": n => { this.keyStrength = n.getObjectValue<AuthenticationMethodKeyStrength>(createAuthenticationMethodKeyStrengthFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the keyStrength property value. Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
     * @returns a admin
     */
    public get keyStrength() {
        return this._keyStrength;
    };
    /**
     * Sets the keyStrength property value. Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
     * @param value Value to set for the keyStrength property.
     */
    public set keyStrength(value: AuthenticationMethodKeyStrength | AdminMember1 | undefined) {
        this._keyStrength = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<Device>("device", this.device);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<AuthenticationMethodKeyStrength>("keyStrength", this.keyStrength);
    };
}
