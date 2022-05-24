import {createDeviceFromDiscriminatorValue} from './createDeviceFromDiscriminatorValue';
import {Device} from './device';
import {AuthenticationMethodImpl, DeviceImpl} from './index';
import {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class MicrosoftAuthenticatorAuthenticationMethodImpl extends AuthenticationMethodImpl implements MicrosoftAuthenticatorAuthenticationMethod, Parsable {
    /** The date and time that this app was registered. This property is null if the device is not registered for passwordless Phone Sign-In. */
    public createdDateTime?: Date | undefined;
    /** The registered device on which Microsoft Authenticator resides. This property is null if the device is not registered for passwordless Phone Sign-In. */
    public device?: Device | undefined;
    /** Tags containing app metadata. */
    public deviceTag?: string | undefined;
    /** The name of the device on which this app is registered. */
    public displayName?: string | undefined;
    /** Numerical version of this instance of the Authenticator app. */
    public phoneAppVersion?: string | undefined;
    /**
     * Instantiates a new microsoftAuthenticatorAuthenticationMethod and sets the default values.
     * @param microsoftAuthenticatorAuthenticationMethodParameterValue 
     */
    public constructor(microsoftAuthenticatorAuthenticationMethodParameterValue?: MicrosoftAuthenticatorAuthenticationMethod | undefined) {
        super();
        this.createdDateTime = microsoftAuthenticatorAuthenticationMethodParameterValue?.createdDateTime ;
        this.device = microsoftAuthenticatorAuthenticationMethodParameterValue?.device ;
        this.deviceTag = microsoftAuthenticatorAuthenticationMethodParameterValue?.deviceTag ;
        this.displayName = microsoftAuthenticatorAuthenticationMethodParameterValue?.displayName ;
        this.phoneAppVersion = microsoftAuthenticatorAuthenticationMethodParameterValue?.phoneAppVersion ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "device": n => { this.device = n.getObjectValue<DeviceImpl>(createDeviceFromDiscriminatorValue); },
            "deviceTag": n => { this.deviceTag = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "phoneAppVersion": n => { this.phoneAppVersion = n.getStringValue(); },
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
        if(this.deviceTag){
        writer.writeStringValue("deviceTag", this.deviceTag);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.phoneAppVersion){
        writer.writeStringValue("phoneAppVersion", this.phoneAppVersion);
        }
    };
}
