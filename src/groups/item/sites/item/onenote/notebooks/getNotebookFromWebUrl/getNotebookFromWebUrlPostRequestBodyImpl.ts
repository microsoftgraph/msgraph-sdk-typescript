import {GetNotebookFromWebUrlPostRequestBody} from './getNotebookFromWebUrlPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getNotebookFromWebUrl method. */
export class GetNotebookFromWebUrlPostRequestBodyImpl implements GetNotebookFromWebUrlPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The webUrl property */
    private _webUrl?: string | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new getNotebookFromWebUrlPostRequestBody and sets the default values.
     * @param getNotebookFromWebUrlPostRequestBodyParameterValue 
     */
    public constructor(getNotebookFromWebUrlPostRequestBodyParameterValue?: GetNotebookFromWebUrlPostRequestBody | undefined) {
        this._additionalData = getNotebookFromWebUrlPostRequestBodyParameterValue?.additionalData ? getNotebookFromWebUrlPostRequestBodyParameterValue?.additionalData! : {};
        this._webUrl = getNotebookFromWebUrlPostRequestBodyParameterValue?.webUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the webUrl property value. The webUrl property
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. The webUrl property
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        if(value) {
            this._webUrl = value;
        }
    };
}
