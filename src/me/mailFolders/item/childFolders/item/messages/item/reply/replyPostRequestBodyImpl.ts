import {MessageImpl} from '../../../../../../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../../../../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../../../../../../models/message';
import {ReplyPostRequestBody} from './replyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reply method. */
export class ReplyPostRequestBodyImpl implements AdditionalDataHolder, Parsable, ReplyPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Comment property */
    public comment?: string | undefined;
    /** The Message property */
    public message?: Message | undefined;
    /**
     * Instantiates a new replyPostRequestBody and sets the default values.
     * @param replyPostRequestBodyParameterValue 
     */
    public constructor(replyPostRequestBodyParameterValue?: ReplyPostRequestBody | undefined) {
        this.additionalData = replyPostRequestBodyParameterValue?.additionalData ? replyPostRequestBodyParameterValue?.additionalData! : {}
        this.comment = replyPostRequestBodyParameterValue?.comment ;
        this.message = replyPostRequestBodyParameterValue?.message ;
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
        writer.writeStringValue("comment", this.comment);
        }
        if(this.message){
        writer.writeObjectValue<MessageImpl>("message", new MessageImpl(this.message));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
