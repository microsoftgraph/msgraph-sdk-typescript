import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedTrainingInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The assignedUserCount property */
    private _assignedUserCount?: number | undefined;
    /** The completedUserCount property */
    private _completedUserCount?: number | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
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
     * Gets the assignedUserCount property value. The assignedUserCount property
     * @returns a integer
     */
    public get assignedUserCount() {
        return this._assignedUserCount;
    };
    /**
     * Sets the assignedUserCount property value. The assignedUserCount property
     * @param value Value to set for the assignedUserCount property.
     */
    public set assignedUserCount(value: number | undefined) {
        this._assignedUserCount = value;
    };
    /**
     * Gets the completedUserCount property value. The completedUserCount property
     * @returns a integer
     */
    public get completedUserCount() {
        return this._completedUserCount;
    };
    /**
     * Sets the completedUserCount property value. The completedUserCount property
     * @param value Value to set for the completedUserCount property.
     */
    public set completedUserCount(value: number | undefined) {
        this._completedUserCount = value;
    };
    /**
     * Instantiates a new assignedTrainingInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.assignedTrainingInfo";
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignedUserCount": n => { this.assignedUserCount = n.getNumberValue(); },
            "completedUserCount": n => { this.completedUserCount = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
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
        writer.writeNumberValue("assignedUserCount", this.assignedUserCount);
        writer.writeNumberValue("completedUserCount", this.completedUserCount);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
