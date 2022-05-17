import {MessageImpl} from '../../../../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../../../../models/message';
import {ReplyRequestBody} from './replyRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reply method. */
export class ReplyRequestBodyImpl implements AdditionalDataHolder, Parsable, ReplyRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The Comment property */
    comment?: string | undefined;
    /** The Message property */
    message?: Message | undefined;
    /**
     * Instantiates a new replyRequestBody and sets the default values.
     * @param replyRequestBodyParameterValue 
     */
    public constructor(replyRequestBodyParameterValue?: ReplyRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = replyRequestBodyParameterValue?.additionalData ? {} : replyRequestBodyParameterValue?.additionalData!
        this.comment = replyRequestBodyParameterValue?.comment ;
        this.message = replyRequestBodyParameterValue?.message ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "message": n => { this.message = n.getObjectValue<MessageImpl>(createMessageFromDiscriminatorValue); },
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
        writer.writeAdditionalData(this.additionalData);
    };
}
