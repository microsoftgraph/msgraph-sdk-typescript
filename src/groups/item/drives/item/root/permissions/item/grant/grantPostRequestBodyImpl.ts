import {DriveRecipientImpl} from '../../../../../../../../models/';
import {createDriveRecipientFromDiscriminatorValue} from '../../../../../../../../models/createDriveRecipientFromDiscriminatorValue';
import {DriveRecipient} from '../../../../../../../../models/driveRecipient';
import {GrantPostRequestBody} from './grantPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the grant method. */
export class GrantPostRequestBodyImpl implements AdditionalDataHolder, GrantPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The recipients property */
    public recipients?: DriveRecipient[] | undefined;
    /** The roles property */
    public roles?: string[] | undefined;
    /**
     * Instantiates a new grantPostRequestBody and sets the default values.
     * @param grantPostRequestBodyParameterValue 
     */
    public constructor(grantPostRequestBodyParameterValue?: GrantPostRequestBody | undefined) {
        this.additionalData = grantPostRequestBodyParameterValue?.additionalData ? grantPostRequestBodyParameterValue?.additionalData! : {}
        this.recipients = grantPostRequestBodyParameterValue?.recipients ;
        this.roles = grantPostRequestBodyParameterValue?.roles ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "recipients": n => { this.recipients = n.getCollectionOfObjectValues<DriveRecipientImpl>(createDriveRecipientFromDiscriminatorValue); },
            "roles": n => { this.roles = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.recipients && this.recipients.length != 0){        const recipientsArrValue: DriveRecipientImpl[] = []; this.recipients?.forEach(element => {recipientsArrValue.push(new DriveRecipientImpl(element));});
        writer.writeCollectionOfObjectValues<DriveRecipientImpl>("recipients", recipientsArrValue);
        }
        if(this.roles){
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
