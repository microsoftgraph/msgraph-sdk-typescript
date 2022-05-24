import {MessageImpl} from '../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../models/message';
import {SendMailPostRequestBody} from './sendMailPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sendMail method. */
export class SendMailPostRequestBodyImpl implements AdditionalDataHolder, Parsable, SendMailPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Message property */
    public message?: Message | undefined;
    /** The SaveToSentItems property */
    public saveToSentItems?: boolean | undefined;
    /**
     * Instantiates a new sendMailPostRequestBody and sets the default values.
     * @param sendMailPostRequestBodyParameterValue 
     */
    public constructor(sendMailPostRequestBodyParameterValue?: SendMailPostRequestBody | undefined) {
        this.additionalData = sendMailPostRequestBodyParameterValue?.additionalData ? sendMailPostRequestBodyParameterValue?.additionalData! : {}
        this.message = sendMailPostRequestBodyParameterValue?.message ;
        this.saveToSentItems = sendMailPostRequestBodyParameterValue?.saveToSentItems ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "message": n => { this.message = n.getObjectValue<MessageImpl>(createMessageFromDiscriminatorValue); },
            "saveToSentItems": n => { this.saveToSentItems = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.message){
        writer.writeObjectValue<MessageImpl>("message", new MessageImpl(this.message));
        }
        if(this.saveToSentItems){
        writer.writeBooleanValue("saveToSentItems", this.saveToSentItems);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
