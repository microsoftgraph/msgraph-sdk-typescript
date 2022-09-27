import {TrainingStatus} from './trainingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserTrainingStatusInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The assignedDateTime property */
    private _assignedDateTime?: Date | undefined;
    /** The completionDateTime property */
    private _completionDateTime?: Date | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The trainingStatus property */
    private _trainingStatus?: TrainingStatus | undefined;
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
     * Gets the assignedDateTime property value. The assignedDateTime property
     * @returns a Date
     */
    public get assignedDateTime() {
        return this._assignedDateTime;
    };
    /**
     * Sets the assignedDateTime property value. The assignedDateTime property
     * @param value Value to set for the assignedDateTime property.
     */
    public set assignedDateTime(value: Date | undefined) {
        this._assignedDateTime = value;
    };
    /**
     * Gets the completionDateTime property value. The completionDateTime property
     * @returns a Date
     */
    public get completionDateTime() {
        return this._completionDateTime;
    };
    /**
     * Sets the completionDateTime property value. The completionDateTime property
     * @param value Value to set for the completionDateTime property.
     */
    public set completionDateTime(value: Date | undefined) {
        this._completionDateTime = value;
    };
    /**
     * Instantiates a new userTrainingStatusInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.userTrainingStatusInfo";
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
            "assignedDateTime": n => { this.assignedDateTime = n.getDateValue(); },
            "completionDateTime": n => { this.completionDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "trainingStatus": n => { this.trainingStatus = n.getEnumValue<TrainingStatus>(TrainingStatus); },
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
        writer.writeDateValue("assignedDateTime", this.assignedDateTime);
        writer.writeDateValue("completionDateTime", this.completionDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<TrainingStatus>("trainingStatus", this.trainingStatus);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the trainingStatus property value. The trainingStatus property
     * @returns a trainingStatus
     */
    public get trainingStatus() {
        return this._trainingStatus;
    };
    /**
     * Sets the trainingStatus property value. The trainingStatus property
     * @param value Value to set for the trainingStatus property.
     */
    public set trainingStatus(value: TrainingStatus | undefined) {
        this._trainingStatus = value;
    };
}
