import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessPlatforms implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue. */
    private _excludePlatforms?: string[] | undefined;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue. */
    private _includePlatforms?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new conditionalAccessPlatforms and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.conditionalAccessPlatforms";
    };
    /**
     * Gets the excludePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue.
     * @returns a string
     */
    public get excludePlatforms() {
        return this._excludePlatforms;
    };
    /**
     * Sets the excludePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue.
     * @param value Value to set for the excludePlatforms property.
     */
    public set excludePlatforms(value: string[] | undefined) {
        this._excludePlatforms = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludePlatforms": n => { this.excludePlatforms = n.getCollectionOfPrimitiveValues<string>(); },
            "includePlatforms": n => { this.includePlatforms = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the includePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue.
     * @returns a string
     */
    public get includePlatforms() {
        return this._includePlatforms;
    };
    /**
     * Sets the includePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue.
     * @param value Value to set for the includePlatforms property.
     */
    public set includePlatforms(value: string[] | undefined) {
        this._includePlatforms = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("excludePlatforms", this.excludePlatforms);
        writer.writeCollectionOfPrimitiveValues<string>("includePlatforms", this.includePlatforms);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
