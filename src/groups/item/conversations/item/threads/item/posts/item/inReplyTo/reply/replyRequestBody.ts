import {Post} from '../../../../../../../../../../models/';
import {createPostFromDiscriminatorValue} from '../../../../../../../../../../models/createPostFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reply method.  */
export class ReplyRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The Post property  */
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new replyRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "post": n => { this.post = n.getObjectValue<Post>(createPostFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the post property value. The Post property
     * @returns a post
     */
    public get post() {
        return this._post;
    };
    /**
     * Sets the post property value. The Post property
     * @param value Value to set for the Post property.
     */
    public set post(value: Post | undefined) {
        this._post = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Post>("post", this.post);
        writer.writeAdditionalData(this.additionalData);
    };
}
