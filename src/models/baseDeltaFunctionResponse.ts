import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BaseDeltaFunctionResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _odataDeltaLink?: string | undefined;
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
     * Instantiates a new BaseDeltaFunctionResponse and sets the default values.
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
            "@odata.deltaLink": n => { this.odataDeltaLink = n.getStringValue(); },
            "@odata.nextLink": n => { this.odataNextLink = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.deltaLink property value. 
     * @returns a string
     */
    public get odataDeltaLink() {
        return this._odataDeltaLink;
    };
    /**
     * Sets the @odata.deltaLink property value. 
     * @param value Value to set for the OdataDeltaLink property.
     */
    public set odataDeltaLink(value: string | undefined) {
        this._odataDeltaLink = value;
    };
    /**
     * Gets the @odata.nextLink property value. 
     * @returns a string
     */
    public get odataNextLink() {
        return this._odataNextLink;
    };
    /**
     * Sets the @odata.nextLink property value. 
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
        writer.writeStringValue("@odata.deltaLink", this.odataDeltaLink);
        writer.writeStringValue("@odata.nextLink", this.odataNextLink);
        writer.writeAdditionalData(this.additionalData);
    };
}
