import {DriveRecipient} from './driveRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveRecipientImpl implements AdditionalDataHolder, DriveRecipient, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The alias of the domain object, for cases where an email address is unavailable (e.g. security groups). */
    public alias?: string | undefined;
    /** The email address for the recipient, if the recipient has an associated email address. */
    public email?: string | undefined;
    /** The unique identifier for the recipient in the directory. */
    public objectId?: string | undefined;
    /**
     * Instantiates a new driveRecipient and sets the default values.
     * @param driveRecipientParameterValue 
     */
    public constructor(driveRecipientParameterValue?: DriveRecipient | undefined) {
        this.additionalData = driveRecipientParameterValue?.additionalData ? driveRecipientParameterValue?.additionalData! : {}
        this.alias = driveRecipientParameterValue?.alias ;
        this.email = driveRecipientParameterValue?.email ;
        this.objectId = driveRecipientParameterValue?.objectId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "alias": n => { this.alias = n.getStringValue(); },
            "email": n => { this.email = n.getStringValue(); },
            "objectId": n => { this.objectId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.alias){
        writer.writeStringValue("alias", this.alias);
        }
        if(this.email){
        writer.writeStringValue("email", this.email);
        }
        if(this.objectId){
        writer.writeStringValue("objectId", this.objectId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
