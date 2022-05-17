import {createOnenotePagePreviewLinksFromDiscriminatorValue} from './createOnenotePagePreviewLinksFromDiscriminatorValue';
import {OnenotePagePreviewLinksImpl} from './index';
import {OnenotePagePreview} from './onenotePagePreview';
import {OnenotePagePreviewLinks} from './onenotePagePreviewLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePagePreviewImpl implements AdditionalDataHolder, OnenotePagePreview, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The links property */
    links?: OnenotePagePreviewLinks | undefined;
    /** The previewText property */
    previewText?: string | undefined;
    /**
     * Instantiates a new onenotePagePreview and sets the default values.
     * @param onenotePagePreviewParameterValue 
     */
    public constructor(onenotePagePreviewParameterValue?: OnenotePagePreview | undefined) {
        this.additionalData = {};
        this.additionalData = onenotePagePreviewParameterValue?.additionalData ? {} : onenotePagePreviewParameterValue?.additionalData!
        this.links = onenotePagePreviewParameterValue?.links ;
        this.previewText = onenotePagePreviewParameterValue?.previewText ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "links": n => { this.links = n.getObjectValue<OnenotePagePreviewLinksImpl>(createOnenotePagePreviewLinksFromDiscriminatorValue); },
            "previewText": n => { this.previewText = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.links){
        if(this.links)
        writer.writeObjectValue<OnenotePagePreviewLinksImpl>("links", new OnenotePagePreviewLinksImpl(this.links));
        }
        if(this.previewText){
        if(this.previewText)
        writer.writeStringValue("previewText", this.previewText);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
