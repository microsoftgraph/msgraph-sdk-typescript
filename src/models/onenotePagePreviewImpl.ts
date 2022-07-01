import {createOnenotePagePreviewLinksFromDiscriminatorValue} from './createOnenotePagePreviewLinksFromDiscriminatorValue';
import {OnenotePagePreviewLinksImpl} from './index';
import {OnenotePagePreview} from './onenotePagePreview';
import {OnenotePagePreviewLinks} from './onenotePagePreviewLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePagePreviewImpl implements OnenotePagePreview {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The links property */
    private _links?: OnenotePagePreviewLinks | undefined;
    /** The previewText property */
    private _previewText?: string | undefined;
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
     * Instantiates a new OnenotePagePreview and sets the default values.
     * @param onenotePagePreviewParameterValue 
     */
    public constructor(onenotePagePreviewParameterValue?: OnenotePagePreview | undefined) {
        this._additionalData = onenotePagePreviewParameterValue?.additionalData ? onenotePagePreviewParameterValue?.additionalData! : {};
        this._links = onenotePagePreviewParameterValue?.links;
        this._previewText = onenotePagePreviewParameterValue?.previewText;
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
     * Gets the links property value. The links property
     * @returns a OnenotePagePreviewLinksInterface
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. The links property
     * @param value Value to set for the links property.
     */
    public set links(value: OnenotePagePreviewLinks | undefined) {
        if(value) {
            this._links = value instanceof OnenotePagePreviewLinksImpl? value as OnenotePagePreviewLinksImpl: new OnenotePagePreviewLinksImpl(value);
        }
    };
    /**
     * Gets the previewText property value. The previewText property
     * @returns a string
     */
    public get previewText() {
        return this._previewText;
    };
    /**
     * Sets the previewText property value. The previewText property
     * @param value Value to set for the previewText property.
     */
    public set previewText(value: string | undefined) {
        if(value) {
            this._previewText = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.links){
            writer.writeObjectValue<OnenotePagePreviewLinksImpl>("links", (this.links instanceof OnenotePagePreviewLinksImpl? this.links as OnenotePagePreviewLinksImpl: new OnenotePagePreviewLinksImpl(this.links)));
        }
        if(this.previewText){
            writer.writeStringValue("previewText", this.previewText);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
