import {AuthenticationMethodKeyStrength} from './authenticationMethodKeyStrength';
import {createDeviceFromDiscriminatorValue} from './createDeviceFromDiscriminatorValue';
import {Device} from './device';
import {AuthenticationMethodImpl, DeviceImpl} from './index';
import {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsHelloForBusinessAuthenticationMethodImpl extends AuthenticationMethodImpl implements WindowsHelloForBusinessAuthenticationMethod {
    /** The date and time that this Windows Hello for Business key was registered. */
    private _createdDateTime?: Date | undefined;
    /** The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device. */
    private _device?: Device | undefined;
    /** The name of the device on which Windows Hello for Business is registered */
    private _displayName?: string | undefined;
    /** Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown. */
    private _keyStrength?: AuthenticationMethodKeyStrength | undefined;
    /**
     * Instantiates a new WindowsHelloForBusinessAuthenticationMethod and sets the default values.
     * @param windowsHelloForBusinessAuthenticationMethodParameterValue 
     */
    public constructor(windowsHelloForBusinessAuthenticationMethodParameterValue?: WindowsHelloForBusinessAuthenticationMethod | undefined) {
        super(windowsHelloForBusinessAuthenticationMethodParameterValue);
        this._createdDateTime = windowsHelloForBusinessAuthenticationMethodParameterValue?.createdDateTime;
        this._device = windowsHelloForBusinessAuthenticationMethodParameterValue?.device;
        this._displayName = windowsHelloForBusinessAuthenticationMethodParameterValue?.displayName;
        this._keyStrength = windowsHelloForBusinessAuthenticationMethodParameterValue?.keyStrength;
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
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the device property value. The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @returns a DeviceInterface
     */
    public get device() {
        return this._device;
    };
    /**
     * Sets the device property value. The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @param value Value to set for the device property.
     */
    public set device(value: Device | undefined) {
        if(value) {
            this._device = value instanceof DeviceImpl? value as DeviceImpl: new DeviceImpl(value);
        }
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
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "device": n => { this.device = n.getObjectValue<DeviceImpl>(createDeviceFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "keyStrength": n => { this.keyStrength = n.getEnumValue<AuthenticationMethodKeyStrength>(AuthenticationMethodKeyStrength); },
        };
    };
    /**
     * Gets the keyStrength property value. Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
     * @returns a authenticationMethodKeyStrength
     */
    public get keyStrength() {
        return this._keyStrength;
    };
    /**
     * Sets the keyStrength property value. Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
     * @param value Value to set for the keyStrength property.
     */
    public set keyStrength(value: AuthenticationMethodKeyStrength | undefined) {
        if(value) {
            this._keyStrength = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.device){
            writer.writeObjectValue<DeviceImpl>("device", (this.device instanceof DeviceImpl? this.device as DeviceImpl: new DeviceImpl(this.device)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.keyStrength){
            writer.writeEnumValue<AuthenticationMethodKeyStrength>("keyStrength", this.keyStrength);
        }
    };
}
