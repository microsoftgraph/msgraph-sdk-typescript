import {MessageImpl} from '../../../../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../../../../models/message';
import {CreateReplyPostRequestBody} from './createReplyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createReply method. */
export class CreateReplyPostRequestBodyImpl implements AdditionalDataHolder, CreateReplyPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Comment property */
    public comment?: string | undefined;
    /** The Message property */
    public message?: Message | undefined;
    /**
     * Instantiates a new createReplyPostRequestBody and sets the default values.
     * @param createReplyPostRequestBodyParameterValue 
     */
    public constructor(createReplyPostRequestBodyParameterValue?: CreateReplyPostRequestBody | undefined) {
        this.additionalData = createReplyPostRequestBodyParameterValue?.additionalData ? createReplyPostRequestBodyParameterValue?.additionalData! : {}
        this.comment = createReplyPostRequestBodyParameterValue?.comment ;
        this.message = createReplyPostRequestBodyParameterValue?.message ;
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
