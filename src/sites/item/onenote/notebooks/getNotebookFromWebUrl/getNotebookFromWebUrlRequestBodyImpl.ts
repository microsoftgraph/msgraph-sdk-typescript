import {GetNotebookFromWebUrlRequestBody} from './getNotebookFromWebUrlRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getNotebookFromWebUrl method.  */
export class GetNotebookFromWebUrlRequestBodyImpl implements AdditionalDataHolder, GetNotebookFromWebUrlRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The webUrl property  */
    webUrl?: string | undefined;
    /**
     * Instantiates a new getNotebookFromWebUrlRequestBody and sets the default values.
     * @param getNotebookFromWebUrlRequestBodyParameterValue 
     */
    public constructor(getNotebookFromWebUrlRequestBodyParameterValue?: GetNotebookFromWebUrlRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = getNotebookFromWebUrlRequestBodyParameterValue?.additionalData ? {} : getNotebookFromWebUrlRequestBodyParameterValue?.additionalData!
        this.webUrl = getNotebookFromWebUrlRequestBodyParameterValue?.webUrl ;
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
        if(this.webUrl)
        writer.writeStringValue("webUrl", this.webUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
