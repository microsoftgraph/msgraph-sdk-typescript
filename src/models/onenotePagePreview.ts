import {createOnenotePagePreviewLinksFromDiscriminatorValue} from './createOnenotePagePreviewLinksFromDiscriminatorValue';
import {OnenotePagePreviewLinks} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePagePreview implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The links property */
    private _links?: OnenotePagePreviewLinks | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new onenotePagePreview and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.onenotePagePreview";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "links": n => { this.links = n.getObjectValue<OnenotePagePreviewLinks>(createOnenotePagePreviewLinksFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "previewText": n => { this.previewText = n.getStringValue(); },
        };
    };
    /**
     * Gets the links property value. The links property
     * @returns a onenotePagePreviewLinks
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. The links property
     * @param value Value to set for the links property.
     */
    public set links(value: OnenotePagePreviewLinks | undefined) {
        this._links = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
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
        this._previewText = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<OnenotePagePreviewLinks>("links", this.links);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("previewText", this.previewText);
        writer.writeAdditionalData(this.additionalData);
    };
}
