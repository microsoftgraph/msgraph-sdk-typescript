import {MessageImpl, RecipientImpl} from '../../../../../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../../../../../models/createMessageFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from '../../../../../../../models/createRecipientFromDiscriminatorValue';
import {Message} from '../../../../../../../models/message';
import {Recipient} from '../../../../../../../models/recipient';
import {CreateForwardRequestBody} from './createForwardRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createForward method.  */
export class CreateForwardRequestBodyImpl implements AdditionalDataHolder, CreateForwardRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The Comment property  */
    comment?: string | undefined;
    /** The Message property  */
    message?: Message | undefined;
    /** The ToRecipients property  */
    toRecipients?: Recipient[] | undefined;
    /**
     * Instantiates a new createForwardRequestBody and sets the default values.
     * @param createForwardRequestBodyParameterValue 
     */
    public constructor(createForwardRequestBodyParameterValue?: CreateForwardRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = createForwardRequestBodyParameterValue?.additionalData ? {} : createForwardRequestBodyParameterValue?.additionalData!
        this.comment = createForwardRequestBodyParameterValue?.comment ;
        this.message = createForwardRequestBodyParameterValue?.message ;
        this.toRecipients = createForwardRequestBodyParameterValue?.toRecipients ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "message": n => { this.message = n.getObjectValue<MessageImpl>(createMessageFromDiscriminatorValue); },
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
        if(this.comment)
        writer.writeStringValue("comment", this.comment);
        }
        if(this.message){
        if(this.message)
        writer.writeObjectValue<MessageImpl>("message", new MessageImpl(this.message));
        }
        if(this.toRecipients){
        const toRecipientsArrValue: RecipientImpl[] = []; this.toRecipients?.forEach(element => {toRecipientsArrValue.push(new RecipientImpl(element));});
        writer.writeCollectionOfObjectValues<RecipientImpl>("toRecipients", toRecipientsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
