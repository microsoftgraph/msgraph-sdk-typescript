import {MessageImpl} from '../../../../../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../../../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../../../../../models/message';
import {CreateReplyRequestBody} from './createReplyRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createReply method. */
export class CreateReplyRequestBodyImpl implements AdditionalDataHolder, CreateReplyRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The Comment property */
    comment?: string | undefined;
    /** The Message property */
    message?: Message | undefined;
    /**
     * Instantiates a new createReplyRequestBody and sets the default values.
     * @param createReplyRequestBodyParameterValue 
     */
    public constructor(createReplyRequestBodyParameterValue?: CreateReplyRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = createReplyRequestBodyParameterValue?.additionalData ? {} : createReplyRequestBodyParameterValue?.additionalData!
        this.comment = createReplyRequestBodyParameterValue?.comment ;
        this.message = createReplyRequestBodyParameterValue?.message ;
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
