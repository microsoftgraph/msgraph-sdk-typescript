import {DriveRecipientImpl} from '../../../models/';
import {createDriveRecipientFromDiscriminatorValue} from '../../../models/createDriveRecipientFromDiscriminatorValue';
import {DriveRecipient} from '../../../models/driveRecipient';
import {InviteRequestBody} from './inviteRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the invite method. */
export class InviteRequestBodyImpl implements AdditionalDataHolder, InviteRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The expirationDateTime property */
    expirationDateTime?: string | undefined;
    /** The message property */
    message?: string | undefined;
    /** The password property */
    password?: string | undefined;
    /** The recipients property */
    recipients?: DriveRecipient[] | undefined;
    /** The requireSignIn property */
    requireSignIn?: boolean | undefined;
    /** The retainInheritedPermissions property */
    retainInheritedPermissions?: boolean | undefined;
    /** The roles property */
    roles?: string[] | undefined;
    /** The sendInvitation property */
    sendInvitation?: boolean | undefined;
    /**
     * Instantiates a new inviteRequestBody and sets the default values.
     * @param inviteRequestBodyParameterValue 
     */
    public constructor(inviteRequestBodyParameterValue?: InviteRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = inviteRequestBodyParameterValue?.additionalData ? {} : inviteRequestBodyParameterValue?.additionalData!
        this.expirationDateTime = inviteRequestBodyParameterValue?.expirationDateTime ;
        this.message = inviteRequestBodyParameterValue?.message ;
        this.password = inviteRequestBodyParameterValue?.password ;
        this.recipients = inviteRequestBodyParameterValue?.recipients ;
        this.requireSignIn = inviteRequestBodyParameterValue?.requireSignIn ;
        this.retainInheritedPermissions = inviteRequestBodyParameterValue?.retainInheritedPermissions ;
        this.roles = inviteRequestBodyParameterValue?.roles ;
        this.sendInvitation = inviteRequestBodyParameterValue?.sendInvitation ;
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
        if(this.expirationDateTime)
        writer.writeStringValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.message){
        if(this.message)
        writer.writeStringValue("message", this.message);
        }
        if(this.password){
        if(this.password)
        writer.writeStringValue("password", this.password);
        }
        if(this.recipients){
        const recipientsArrValue: DriveRecipientImpl[] = []; this.recipients?.forEach(element => {recipientsArrValue.push(new DriveRecipientImpl(element));});
        writer.writeCollectionOfObjectValues<DriveRecipientImpl>("recipients", recipientsArrValue);
        }
        if(this.requireSignIn){
        if(this.requireSignIn)
        writer.writeBooleanValue("requireSignIn", this.requireSignIn);
        }
        if(this.retainInheritedPermissions){
        if(this.retainInheritedPermissions)
        writer.writeBooleanValue("retainInheritedPermissions", this.retainInheritedPermissions);
        }
        if(this.roles){
        if(this.roles)
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        }
        if(this.sendInvitation){
        if(this.sendInvitation)
        writer.writeBooleanValue("sendInvitation", this.sendInvitation);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
