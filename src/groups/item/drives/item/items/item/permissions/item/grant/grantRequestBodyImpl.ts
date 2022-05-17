import {DriveRecipientImpl} from '../../../../../../../../../models/';
import {createDriveRecipientFromDiscriminatorValue} from '../../../../../../../../../models/createDriveRecipientFromDiscriminatorValue';
import {DriveRecipient} from '../../../../../../../../../models/driveRecipient';
import {GrantRequestBody} from './grantRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the grant method. */
export class GrantRequestBodyImpl implements AdditionalDataHolder, GrantRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The recipients property */
    recipients?: DriveRecipient[] | undefined;
    /** The roles property */
    roles?: string[] | undefined;
    /**
     * Instantiates a new grantRequestBody and sets the default values.
     * @param grantRequestBodyParameterValue 
     */
    public constructor(grantRequestBodyParameterValue?: GrantRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = grantRequestBodyParameterValue?.additionalData ? {} : grantRequestBodyParameterValue?.additionalData!
        this.recipients = grantRequestBodyParameterValue?.recipients ;
        this.roles = grantRequestBodyParameterValue?.roles ;
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
        if(this.recipients){
        const recipientsArrValue: DriveRecipientImpl[] = []; this.recipients?.forEach(element => {recipientsArrValue.push(new DriveRecipientImpl(element));});
        writer.writeCollectionOfObjectValues<DriveRecipientImpl>("recipients", recipientsArrValue);
        }
        if(this.roles){
        if(this.roles)
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
