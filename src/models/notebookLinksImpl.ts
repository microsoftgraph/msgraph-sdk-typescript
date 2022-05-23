import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './externalLink';
import {ExternalLinkImpl} from './index';
import {NotebookLinks} from './notebookLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NotebookLinksImpl implements AdditionalDataHolder, NotebookLinks, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Opens the notebook in the OneNote native client if it's installed. */
    public oneNoteClientUrl?: ExternalLink | undefined;
    /** Opens the notebook in OneNote on the web. */
    public oneNoteWebUrl?: ExternalLink | undefined;
    /**
     * Instantiates a new notebookLinks and sets the default values.
     * @param notebookLinksParameterValue 
     */
    public constructor(notebookLinksParameterValue?: NotebookLinks | undefined) {
        this.additionalData = notebookLinksParameterValue?.additionalData ? notebookLinksParameterValue?.additionalData! : {}
        this.oneNoteClientUrl = notebookLinksParameterValue?.oneNoteClientUrl ;
        this.oneNoteWebUrl = notebookLinksParameterValue?.oneNoteWebUrl ;
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
