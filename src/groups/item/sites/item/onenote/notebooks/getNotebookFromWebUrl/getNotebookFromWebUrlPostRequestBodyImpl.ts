import {GetNotebookFromWebUrlPostRequestBody} from './getNotebookFromWebUrlPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getNotebookFromWebUrl method. */
export class GetNotebookFromWebUrlPostRequestBodyImpl implements AdditionalDataHolder, GetNotebookFromWebUrlPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The webUrl property */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new getNotebookFromWebUrlPostRequestBody and sets the default values.
     * @param getNotebookFromWebUrlPostRequestBodyParameterValue 
     */
    public constructor(getNotebookFromWebUrlPostRequestBodyParameterValue?: GetNotebookFromWebUrlPostRequestBody | undefined) {
        this.additionalData = getNotebookFromWebUrlPostRequestBodyParameterValue?.additionalData ? getNotebookFromWebUrlPostRequestBodyParameterValue?.additionalData! : {}
        this.webUrl = getNotebookFromWebUrlPostRequestBodyParameterValue?.webUrl ;
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
}
