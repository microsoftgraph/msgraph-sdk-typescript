import {AuthenticationMethodKeyStrength} from './authenticationMethodKeyStrength';
import {createDeviceFromDiscriminatorValue} from './createDeviceFromDiscriminatorValue';
import {Device} from './device';
import {AuthenticationMethodImpl, DeviceImpl} from './index';
import {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WindowsHelloForBusinessAuthenticationMethodImpl extends AuthenticationMethodImpl implements Parsable, WindowsHelloForBusinessAuthenticationMethod {
    /** The date and time that this Windows Hello for Business key was registered. */
    public createdDateTime?: Date | undefined;
    /** The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device. */
    public device?: Device | undefined;
    /** The name of the device on which Windows Hello for Business is registered */
    public displayName?: string | undefined;
    /** Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown. */
    public keyStrength?: AuthenticationMethodKeyStrength | undefined;
    /**
     * Instantiates a new windowsHelloForBusinessAuthenticationMethod and sets the default values.
     * @param windowsHelloForBusinessAuthenticationMethodParameterValue 
     */
    public constructor(windowsHelloForBusinessAuthenticationMethodParameterValue?: WindowsHelloForBusinessAuthenticationMethod | undefined) {
        super();
        this.createdDateTime = windowsHelloForBusinessAuthenticationMethodParameterValue?.createdDateTime ;
        this.device = windowsHelloForBusinessAuthenticationMethodParameterValue?.device ;
        this.displayName = windowsHelloForBusinessAuthenticationMethodParameterValue?.displayName ;
        this.keyStrength = windowsHelloForBusinessAuthenticationMethodParameterValue?.keyStrength ;
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
        writer.writeObjectValue<DeviceImpl>("device", new DeviceImpl(this.device));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.keyStrength){
        writer.writeEnumValue<AuthenticationMethodKeyStrength>("keyStrength", this.keyStrength);
        }
    };
}
