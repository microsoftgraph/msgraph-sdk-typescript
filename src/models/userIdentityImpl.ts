import {IdentityImpl} from './index';
import {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserIdentityImpl extends IdentityImpl implements UserIdentity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates the client IP address used by user performing the activity (audit log only). */
    public ipAddress?: string | undefined;
    /** The userPrincipalName attribute of the user. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new UserIdentity and sets the default values.
     * @param userIdentityParameterValue 
     */
    public constructor(userIdentityParameterValue?: UserIdentity | undefined) {
        super(userIdentityParameterValue);
        this.additionalData = userIdentityParameterValue?.additionalData ? userIdentityParameterValue?.additionalData! : {};
        this.ipAddress = userIdentityParameterValue?.ipAddress;
        this.userPrincipalName = userIdentityParameterValue?.userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.ipAddress){
            writer.writeStringValue("ipAddress", this.ipAddress);
        }
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
