import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './externalLink';
import {ExternalLinkImpl} from './index';
import {NotebookLinks} from './notebookLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NotebookLinksImpl implements NotebookLinks {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Opens the notebook in the OneNote native client if it's installed. */
    private _oneNoteClientUrl?: ExternalLink | undefined;
    /** Opens the notebook in OneNote on the web. */
    private _oneNoteWebUrl?: ExternalLink | undefined;
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
     * Instantiates a new notebookLinks and sets the default values.
     * @param notebookLinksParameterValue 
     */
    public constructor(notebookLinksParameterValue?: NotebookLinks | undefined) {
        this._additionalData = notebookLinksParameterValue?.additionalData ? notebookLinksParameterValue?.additionalData! : {};
        this._oneNoteClientUrl = notebookLinksParameterValue?.oneNoteClientUrl;
        this._oneNoteWebUrl = notebookLinksParameterValue?.oneNoteWebUrl;
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
     * Gets the oneNoteClientUrl property value. Opens the notebook in the OneNote native client if it's installed.
     * @returns a ExternalLinkInterface
     */
    public get oneNoteClientUrl() {
        return this._oneNoteClientUrl;
    };
    /**
     * Sets the oneNoteClientUrl property value. Opens the notebook in the OneNote native client if it's installed.
     * @param value Value to set for the oneNoteClientUrl property.
     */
    public set oneNoteClientUrl(value: ExternalLink | undefined) {
        if(value) {
            this._oneNoteClientUrl = value instanceof ExternalLinkImpl? value : new ExternalLinkImpl(value);
        }
    };
    /**
     * Gets the oneNoteWebUrl property value. Opens the notebook in OneNote on the web.
     * @returns a ExternalLinkInterface
     */
    public get oneNoteWebUrl() {
        return this._oneNoteWebUrl;
    };
    /**
     * Sets the oneNoteWebUrl property value. Opens the notebook in OneNote on the web.
     * @param value Value to set for the oneNoteWebUrl property.
     */
    public set oneNoteWebUrl(value: ExternalLink | undefined) {
        if(value) {
            this._oneNoteWebUrl = value instanceof ExternalLinkImpl? value : new ExternalLinkImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.oneNoteClientUrl){
            writer.writeObjectValue<ExternalLinkImpl>("oneNoteClientUrl", (!this.oneNoteClientUrl || this.oneNoteClientUrl instanceof ExternalLinkImpl? this.oneNoteClientUrl : new ExternalLinkImpl(this.oneNoteClientUrl)));
        }
        if(this.oneNoteWebUrl){
            writer.writeObjectValue<ExternalLinkImpl>("oneNoteWebUrl", (!this.oneNoteWebUrl || this.oneNoteWebUrl instanceof ExternalLinkImpl? this.oneNoteWebUrl : new ExternalLinkImpl(this.oneNoteWebUrl)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
