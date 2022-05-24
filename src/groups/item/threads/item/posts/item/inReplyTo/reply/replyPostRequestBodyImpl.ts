import {PostImpl} from '../../../../../../../../models/';
import {createPostFromDiscriminatorValue} from '../../../../../../../../models/createPostFromDiscriminatorValue';
import {Post} from '../../../../../../../../models/post';
import {ReplyPostRequestBody} from './replyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reply method. */
export class ReplyPostRequestBodyImpl implements AdditionalDataHolder, Parsable, ReplyPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Post property */
    public post?: Post | undefined;
    /**
     * Instantiates a new replyPostRequestBody and sets the default values.
     * @param replyPostRequestBodyParameterValue 
     */
    public constructor(replyPostRequestBodyParameterValue?: ReplyPostRequestBody | undefined) {
        this.additionalData = replyPostRequestBodyParameterValue?.additionalData ? replyPostRequestBodyParameterValue?.additionalData! : {}
        this.post = replyPostRequestBodyParameterValue?.post ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "post": n => { this.post = n.getObjectValue<PostImpl>(createPostFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.post){
        writer.writeObjectValue<PostImpl>("post", new PostImpl(this.post));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
