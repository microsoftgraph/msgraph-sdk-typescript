import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookSessionInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Id of the workbook session. */
    private _id?: string | undefined;
    private _odataType?: string | undefined;
    /** true for persistent session. false for non-persistent session (view mode) */
    private _persistChanges?: boolean | undefined;
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
     * Instantiates a new workbookSessionInfo and sets the default values.
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
            "id": n => { this.id = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "persistChanges": n => { this.persistChanges = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the id property value. Id of the workbook session.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Id of the workbook session.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the persistChanges property value. true for persistent session. false for non-persistent session (view mode)
     * @returns a boolean
     */
    public get persistChanges() {
        return this._persistChanges;
    };
    /**
     * Sets the persistChanges property value. true for persistent session. false for non-persistent session (view mode)
     * @param value Value to set for the persistChanges property.
     */
    public set persistChanges(value: boolean | undefined) {
        this._persistChanges = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("persistChanges", this.persistChanges);
        writer.writeAdditionalData(this.additionalData);
    };
}
