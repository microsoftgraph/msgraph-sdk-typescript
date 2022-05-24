import {PreviewPostRequestBody} from './previewPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the preview method. */
export class PreviewPostRequestBodyImpl implements AdditionalDataHolder, Parsable, PreviewPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The page property */
    public page?: string | undefined;
    /** The zoom property */
    public zoom?: number | undefined;
    /**
     * Instantiates a new previewPostRequestBody and sets the default values.
     * @param previewPostRequestBodyParameterValue 
     */
    public constructor(previewPostRequestBodyParameterValue?: PreviewPostRequestBody | undefined) {
        this.additionalData = previewPostRequestBodyParameterValue?.additionalData ? previewPostRequestBodyParameterValue?.additionalData! : {}
        this.page = previewPostRequestBodyParameterValue?.page ;
        this.zoom = previewPostRequestBodyParameterValue?.zoom ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "page": n => { this.page = n.getStringValue(); },
            "zoom": n => { this.zoom = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.page){
        writer.writeStringValue("page", this.page);
        }
        if(this.zoom){
        writer.writeNumberValue("zoom", this.zoom);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
