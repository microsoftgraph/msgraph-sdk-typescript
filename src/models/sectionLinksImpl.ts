import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './externalLink';
import {ExternalLinkImpl} from './index';
import {SectionLinks} from './sectionLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SectionLinksImpl implements SectionLinks {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Opens the section in the OneNote native client if it's installed. */
    private _oneNoteClientUrl?: ExternalLink | undefined;
    /** Opens the section in OneNote on the web. */
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new sectionLinks and sets the default values.
     * @param sectionLinksParameterValue 
     */
    public constructor(sectionLinksParameterValue?: SectionLinks | undefined) {
        this._additionalData = sectionLinksParameterValue?.additionalData ? sectionLinksParameterValue?.additionalData! : {};
        this._oneNoteClientUrl = sectionLinksParameterValue?.oneNoteClientUrl;
        this._oneNoteWebUrl = sectionLinksParameterValue?.oneNoteWebUrl;
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
     * Gets the oneNoteClientUrl property value. Opens the section in the OneNote native client if it's installed.
     * @returns a ExternalLinkInterface
     */
    public get oneNoteClientUrl() {
        return this._oneNoteClientUrl;
    };
    /**
     * Sets the oneNoteClientUrl property value. Opens the section in the OneNote native client if it's installed.
     * @param value Value to set for the oneNoteClientUrl property.
     */
    public set oneNoteClientUrl(value: ExternalLink | undefined) {
        if(value) {
            this._oneNoteClientUrl = value instanceof ExternalLinkImpl? value : new ExternalLinkImpl(value);
        }
    };
    /**
     * Gets the oneNoteWebUrl property value. Opens the section in OneNote on the web.
     * @returns a ExternalLinkInterface
     */
    public get oneNoteWebUrl() {
        return this._oneNoteWebUrl;
    };
    /**
     * Sets the oneNoteWebUrl property value. Opens the section in OneNote on the web.
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
