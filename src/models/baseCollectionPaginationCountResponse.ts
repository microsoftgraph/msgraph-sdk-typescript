import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BaseCollectionPaginationCountResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataCount property */
    private _odataCount?: number | undefined;
    /** The OdataNextLink property */
    private _odataNextLink?: string | undefined;
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
     * Instantiates a new BaseCollectionPaginationCountResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.count": n => { this.odataCount = n.getNumberValue(); },
            "@odata.nextLink": n => { this.odataNextLink = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.count property value. The OdataCount property
     * @returns a int64
     */
    public get odataCount() {
        return this._odataCount;
    };
    /**
     * Sets the @odata.count property value. The OdataCount property
     * @param value Value to set for the OdataCount property.
     */
    public set odataCount(value: number | undefined) {
        this._odataCount = value;
    };
    /**
     * Gets the @odata.nextLink property value. The OdataNextLink property
     * @returns a string
     */
    public get odataNextLink() {
        return this._odataNextLink;
    };
    /**
     * Sets the @odata.nextLink property value. The OdataNextLink property
     * @param value Value to set for the OdataNextLink property.
     */
    public set odataNextLink(value: string | undefined) {
        this._odataNextLink = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("@odata.count", this.odataCount);
        writer.writeStringValue("@odata.nextLink", this.odataNextLink);
        writer.writeAdditionalData(this.additionalData);
    };
}
