import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {SharingInvitation} from './sharingInvitation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharingInvitationImpl implements AdditionalDataHolder, Parsable, SharingInvitation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The email address provided for the recipient of the sharing invitation. Read-only. */
    public email?: string | undefined;
    /** Provides information about who sent the invitation that created this permission, if that information is available. Read-only. */
    public invitedBy?: IdentitySet | undefined;
    /** The redeemedBy property */
    public redeemedBy?: string | undefined;
    /** If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only. */
    public signInRequired?: boolean | undefined;
    /**
     * Instantiates a new sharingInvitation and sets the default values.
     * @param sharingInvitationParameterValue 
     */
    public constructor(sharingInvitationParameterValue?: SharingInvitation | undefined) {
        this.additionalData = sharingInvitationParameterValue?.additionalData ? sharingInvitationParameterValue?.additionalData! : {}
        this.email = sharingInvitationParameterValue?.email ;
        this.invitedBy = sharingInvitationParameterValue?.invitedBy ;
        this.redeemedBy = sharingInvitationParameterValue?.redeemedBy ;
        this.signInRequired = sharingInvitationParameterValue?.signInRequired ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "email": n => { this.email = n.getStringValue(); },
            "invitedBy": n => { this.invitedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "redeemedBy": n => { this.redeemedBy = n.getStringValue(); },
            "signInRequired": n => { this.signInRequired = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.email){
        writer.writeStringValue("email", this.email);
        }
        if(this.invitedBy){
        writer.writeObjectValue<IdentitySetImpl>("invitedBy", new IdentitySetImpl(this.invitedBy));
        }
        if(this.redeemedBy){
        writer.writeStringValue("redeemedBy", this.redeemedBy);
        }
        if(this.signInRequired){
        writer.writeBooleanValue("signInRequired", this.signInRequired);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
