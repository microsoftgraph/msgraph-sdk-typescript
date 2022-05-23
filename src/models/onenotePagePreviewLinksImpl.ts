import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './externalLink';
import {ExternalLinkImpl} from './index';
import {OnenotePagePreviewLinks} from './onenotePagePreviewLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePagePreviewLinksImpl implements AdditionalDataHolder, OnenotePagePreviewLinks, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The previewImageUrl property */
    public previewImageUrl?: ExternalLink | undefined;
    /**
     * Instantiates a new onenotePagePreviewLinks and sets the default values.
     * @param onenotePagePreviewLinksParameterValue 
     */
    public constructor(onenotePagePreviewLinksParameterValue?: OnenotePagePreviewLinks | undefined) {
        this.additionalData = onenotePagePreviewLinksParameterValue?.additionalData ? onenotePagePreviewLinksParameterValue?.additionalData! : {}
        this.previewImageUrl = onenotePagePreviewLinksParameterValue?.previewImageUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "previewImageUrl": n => { this.previewImageUrl = n.getObjectValue<ExternalLinkImpl>(createExternalLinkFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.previewImageUrl){
        writer.writeObjectValue<ExternalLinkImpl>("previewImageUrl", new ExternalLinkImpl(this.previewImageUrl));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
