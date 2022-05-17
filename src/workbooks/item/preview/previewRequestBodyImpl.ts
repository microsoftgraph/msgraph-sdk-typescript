import {PreviewRequestBody} from './previewRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the preview method. */
export class PreviewRequestBodyImpl implements AdditionalDataHolder, Parsable, PreviewRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The page property */
    page?: string | undefined;
    /** The zoom property */
    zoom?: number | undefined;
    /**
     * Instantiates a new previewRequestBody and sets the default values.
     * @param previewRequestBodyParameterValue 
     */
    public constructor(previewRequestBodyParameterValue?: PreviewRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = previewRequestBodyParameterValue?.additionalData ? {} : previewRequestBodyParameterValue?.additionalData!
        this.page = previewRequestBodyParameterValue?.page ;
        this.zoom = previewRequestBodyParameterValue?.zoom ;
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
        if(this.page)
        writer.writeStringValue("page", this.page);
        }
        if(this.zoom){
        if(this.zoom)
        writer.writeNumberValue("zoom", this.zoom);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
