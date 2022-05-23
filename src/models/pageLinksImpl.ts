import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './externalLink';
import {ExternalLinkImpl} from './index';
import {PageLinks} from './pageLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PageLinksImpl implements AdditionalDataHolder, PageLinks, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Opens the page in the OneNote native client if it's installed. */
    public oneNoteClientUrl?: ExternalLink | undefined;
    /** Opens the page in OneNote on the web. */
    public oneNoteWebUrl?: ExternalLink | undefined;
    /**
     * Instantiates a new pageLinks and sets the default values.
     * @param pageLinksParameterValue 
     */
    public constructor(pageLinksParameterValue?: PageLinks | undefined) {
        this.additionalData = pageLinksParameterValue?.additionalData ? pageLinksParameterValue?.additionalData! : {}
        this.oneNoteClientUrl = pageLinksParameterValue?.oneNoteClientUrl ;
        this.oneNoteWebUrl = pageLinksParameterValue?.oneNoteWebUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "oneNoteClientUrl": n => { this.oneNoteClientUrl = n.getObjectValue<ExternalLinkImpl>(createExternalLinkFromDiscriminatorValue); },
            "oneNoteWebUrl": n => { this.oneNoteWebUrl = n.getObjectValue<ExternalLinkImpl>(createExternalLinkFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.oneNoteClientUrl){
        writer.writeObjectValue<ExternalLinkImpl>("oneNoteClientUrl", new ExternalLinkImpl(this.oneNoteClientUrl));
        }
        if(this.oneNoteWebUrl){
        writer.writeObjectValue<ExternalLinkImpl>("oneNoteWebUrl", new ExternalLinkImpl(this.oneNoteWebUrl));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
