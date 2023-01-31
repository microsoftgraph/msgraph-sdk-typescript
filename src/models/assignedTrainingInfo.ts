import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedTrainingInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Number of users who were assigned the training in an attack simulation and training campaign. */
    private _assignedUserCount?: number | undefined;
    /** Number of users who completed the training in an attack simulation and training campaign. */
    private _completedUserCount?: number | undefined;
    /** Display name of the training in an attack simulation and training campaign. */
    private _displayName?: string | undefined;
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
     * Gets the assignedUserCount property value. Number of users who were assigned the training in an attack simulation and training campaign.
     * @returns a integer
     */
    public get assignedUserCount() {
        return this._assignedUserCount;
    };
    /**
     * Sets the assignedUserCount property value. Number of users who were assigned the training in an attack simulation and training campaign.
     * @param value Value to set for the assignedUserCount property.
     */
    public set assignedUserCount(value: number | undefined) {
        this._assignedUserCount = value;
    };
    /**
     * Gets the completedUserCount property value. Number of users who completed the training in an attack simulation and training campaign.
     * @returns a integer
     */
    public get completedUserCount() {
        return this._completedUserCount;
    };
    /**
     * Sets the completedUserCount property value. Number of users who completed the training in an attack simulation and training campaign.
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
    };
    /**
     * Gets the displayName property value. Display name of the training in an attack simulation and training campaign.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the training in an attack simulation and training campaign.
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
