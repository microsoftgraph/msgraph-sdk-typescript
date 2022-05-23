import {DriveRecipientImpl} from '../../../models/';
import {createDriveRecipientFromDiscriminatorValue} from '../../../models/createDriveRecipientFromDiscriminatorValue';
import {DriveRecipient} from '../../../models/driveRecipient';
import {InvitePostRequestBody} from './invitePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the invite method. */
export class InvitePostRequestBodyImpl implements AdditionalDataHolder, InvitePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The expirationDateTime property */
    public expirationDateTime?: string | undefined;
    /** The message property */
    public message?: string | undefined;
    /** The password property */
    public password?: string | undefined;
    /** The recipients property */
    public recipients?: DriveRecipient[] | undefined;
    /** The requireSignIn property */
    public requireSignIn?: boolean | undefined;
    /** The retainInheritedPermissions property */
    public retainInheritedPermissions?: boolean | undefined;
    /** The roles property */
    public roles?: string[] | undefined;
    /** The sendInvitation property */
    public sendInvitation?: boolean | undefined;
    /**
     * Instantiates a new invitePostRequestBody and sets the default values.
     * @param invitePostRequestBodyParameterValue 
     */
    public constructor(invitePostRequestBodyParameterValue?: InvitePostRequestBody | undefined) {
        this.additionalData = invitePostRequestBodyParameterValue?.additionalData ? invitePostRequestBodyParameterValue?.additionalData! : {}
        this.expirationDateTime = invitePostRequestBodyParameterValue?.expirationDateTime ;
        this.message = invitePostRequestBodyParameterValue?.message ;
        this.password = invitePostRequestBodyParameterValue?.password ;
        this.recipients = invitePostRequestBodyParameterValue?.recipients ;
        this.requireSignIn = invitePostRequestBodyParameterValue?.requireSignIn ;
        this.retainInheritedPermissions = invitePostRequestBodyParameterValue?.retainInheritedPermissions ;
        this.roles = invitePostRequestBodyParameterValue?.roles ;
        this.sendInvitation = invitePostRequestBodyParameterValue?.sendInvitation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expirationDateTime": n => { this.expirationDateTime = n.getStringValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "password": n => { this.password = n.getStringValue(); },
            "recipients": n => { this.recipients = n.getCollectionOfObjectValues<DriveRecipientImpl>(createDriveRecipientFromDiscriminatorValue); },
            "requireSignIn": n => { this.requireSignIn = n.getBooleanValue(); },
            "retainInheritedPermissions": n => { this.retainInheritedPermissions = n.getBooleanValue(); },
            "roles": n => { this.roles = n.getCollectionOfPrimitiveValues<string>(); },
            "sendInvitation": n => { this.sendInvitation = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.expirationDateTime){
        writer.writeStringValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        if(this.password){
        writer.writeStringValue("password", this.password);
        }
        if(this.recipients && this.recipients.length != 0){        const recipientsArrValue: DriveRecipientImpl[] = []; this.recipients?.forEach(element => {recipientsArrValue.push(new DriveRecipientImpl(element));});
        writer.writeCollectionOfObjectValues<DriveRecipientImpl>("recipients", recipientsArrValue);
        }
        if(this.requireSignIn){
        writer.writeBooleanValue("requireSignIn", this.requireSignIn);
        }
        if(this.retainInheritedPermissions){
        writer.writeBooleanValue("retainInheritedPermissions", this.retainInheritedPermissions);
        }
        if(this.roles){
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        }
        if(this.sendInvitation){
        writer.writeBooleanValue("sendInvitation", this.sendInvitation);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
