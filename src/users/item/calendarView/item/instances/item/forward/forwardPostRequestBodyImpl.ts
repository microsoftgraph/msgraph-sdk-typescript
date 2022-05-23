import {RecipientImpl} from '../../../../../../../models/';
import {createRecipientFromDiscriminatorValue} from '../../../../../../../models/createRecipientFromDiscriminatorValue';
import {Recipient} from '../../../../../../../models/recipient';
import {ForwardPostRequestBody} from './forwardPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the forward method. */
export class ForwardPostRequestBodyImpl implements AdditionalDataHolder, ForwardPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Comment property */
    public comment?: string | undefined;
    /** The ToRecipients property */
    public toRecipients?: Recipient[] | undefined;
    /**
     * Instantiates a new forwardPostRequestBody and sets the default values.
     * @param forwardPostRequestBodyParameterValue 
     */
    public constructor(forwardPostRequestBodyParameterValue?: ForwardPostRequestBody | undefined) {
        this.additionalData = forwardPostRequestBodyParameterValue?.additionalData ? forwardPostRequestBodyParameterValue?.additionalData! : {}
        this.comment = forwardPostRequestBodyParameterValue?.comment ;
        this.toRecipients = forwardPostRequestBodyParameterValue?.toRecipients ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "toRecipients": n => { this.toRecipients = n.getCollectionOfObjectValues<RecipientImpl>(createRecipientFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.comment){
        writer.writeStringValue("comment", this.comment);
        }
        if(this.toRecipients && this.toRecipients.length != 0){        const toRecipientsArrValue: RecipientImpl[] = []; this.toRecipients?.forEach(element => {toRecipientsArrValue.push(new RecipientImpl(element));});
        writer.writeCollectionOfObjectValues<RecipientImpl>("toRecipients", toRecipientsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
