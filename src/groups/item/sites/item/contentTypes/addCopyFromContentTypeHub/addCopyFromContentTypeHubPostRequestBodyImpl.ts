import {AddCopyFromContentTypeHubPostRequestBody} from './addCopyFromContentTypeHubPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addCopyFromContentTypeHub method. */
export class AddCopyFromContentTypeHubPostRequestBodyImpl implements AddCopyFromContentTypeHubPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The contentTypeId property */
    private _contentTypeId?: string | undefined;
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
     * Instantiates a new addCopyFromContentTypeHubPostRequestBody and sets the default values.
     * @param addCopyFromContentTypeHubPostRequestBodyParameterValue 
     */
    public constructor(addCopyFromContentTypeHubPostRequestBodyParameterValue?: AddCopyFromContentTypeHubPostRequestBody | undefined) {
        this._additionalData = addCopyFromContentTypeHubPostRequestBodyParameterValue?.additionalData ? addCopyFromContentTypeHubPostRequestBodyParameterValue?.additionalData! : {};
        this._contentTypeId = addCopyFromContentTypeHubPostRequestBodyParameterValue?.contentTypeId;
    };
    /**
     * Gets the contentTypeId property value. The contentTypeId property
     * @returns a string
     */
    public get contentTypeId() {
        return this._contentTypeId;
    };
    /**
     * Sets the contentTypeId property value. The contentTypeId property
     * @param value Value to set for the contentTypeId property.
     */
    public set contentTypeId(value: string | undefined) {
        if(value) {
            this._contentTypeId = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentTypeId": n => { this.contentTypeId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.contentTypeId){
            writer.writeStringValue("contentTypeId", this.contentTypeId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
