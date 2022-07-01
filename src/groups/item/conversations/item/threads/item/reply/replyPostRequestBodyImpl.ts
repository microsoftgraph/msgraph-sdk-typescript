import {PostImpl} from '../../../../../../../models/';
import {createPostFromDiscriminatorValue} from '../../../../../../../models/createPostFromDiscriminatorValue';
import {Post} from '../../../../../../../models/post';
import {ReplyPostRequestBody} from './replyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reply method. */
export class ReplyPostRequestBodyImpl implements ReplyPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The Post property */
    private _post?: Post | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new replyPostRequestBody and sets the default values.
     * @param replyPostRequestBodyParameterValue 
     */
    public constructor(replyPostRequestBodyParameterValue?: ReplyPostRequestBody | undefined) {
        this._additionalData = replyPostRequestBodyParameterValue?.additionalData ? replyPostRequestBodyParameterValue?.additionalData! : {};
        this._post = replyPostRequestBodyParameterValue?.post;
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
     * Gets the post property value. The Post property
     * @returns a PostInterface
     */
    public get post() {
        return this._post;
    };
    /**
     * Sets the post property value. The Post property
     * @param value Value to set for the Post property.
     */
    public set post(value: Post | undefined) {
        if(value) {
            this._post = value instanceof PostImpl? value as PostImpl: new PostImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.post){
            writer.writeObjectValue<PostImpl>("post", (this.post instanceof PostImpl? this.post as PostImpl: new PostImpl(this.post)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
