import {createUserTrainingContentEventInfoFromDiscriminatorValue} from './createUserTrainingContentEventInfoFromDiscriminatorValue';
import {UserTrainingContentEventInfo} from './index';
import {TrainingStatus} from './trainingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserTrainingEventInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The latestTrainingStatus property */
    private _latestTrainingStatus?: TrainingStatus | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The trainingAssignedProperties property */
    private _trainingAssignedProperties?: UserTrainingContentEventInfo | undefined;
    /** The trainingCompletedProperties property */
    private _trainingCompletedProperties?: UserTrainingContentEventInfo | undefined;
    /** The trainingUpdatedProperties property */
    private _trainingUpdatedProperties?: UserTrainingContentEventInfo | undefined;
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
     * Instantiates a new userTrainingEventInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.userTrainingEventInfo";
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
            "displayName": n => { this.displayName = n.getStringValue(); },
            "latestTrainingStatus": n => { this.latestTrainingStatus = n.getEnumValue<TrainingStatus>(TrainingStatus); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "trainingAssignedProperties": n => { this.trainingAssignedProperties = n.getObjectValue<UserTrainingContentEventInfo>(createUserTrainingContentEventInfoFromDiscriminatorValue); },
            "trainingCompletedProperties": n => { this.trainingCompletedProperties = n.getObjectValue<UserTrainingContentEventInfo>(createUserTrainingContentEventInfoFromDiscriminatorValue); },
            "trainingUpdatedProperties": n => { this.trainingUpdatedProperties = n.getObjectValue<UserTrainingContentEventInfo>(createUserTrainingContentEventInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the latestTrainingStatus property value. The latestTrainingStatus property
     * @returns a trainingStatus
     */
    public get latestTrainingStatus() {
        return this._latestTrainingStatus;
    };
    /**
     * Sets the latestTrainingStatus property value. The latestTrainingStatus property
     * @param value Value to set for the latestTrainingStatus property.
     */
    public set latestTrainingStatus(value: TrainingStatus | undefined) {
        this._latestTrainingStatus = value;
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<TrainingStatus>("latestTrainingStatus", this.latestTrainingStatus);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<UserTrainingContentEventInfo>("trainingAssignedProperties", this.trainingAssignedProperties);
        writer.writeObjectValue<UserTrainingContentEventInfo>("trainingCompletedProperties", this.trainingCompletedProperties);
        writer.writeObjectValue<UserTrainingContentEventInfo>("trainingUpdatedProperties", this.trainingUpdatedProperties);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the trainingAssignedProperties property value. The trainingAssignedProperties property
     * @returns a userTrainingContentEventInfo
     */
    public get trainingAssignedProperties() {
        return this._trainingAssignedProperties;
    };
    /**
     * Sets the trainingAssignedProperties property value. The trainingAssignedProperties property
     * @param value Value to set for the trainingAssignedProperties property.
     */
    public set trainingAssignedProperties(value: UserTrainingContentEventInfo | undefined) {
        this._trainingAssignedProperties = value;
    };
    /**
     * Gets the trainingCompletedProperties property value. The trainingCompletedProperties property
     * @returns a userTrainingContentEventInfo
     */
    public get trainingCompletedProperties() {
        return this._trainingCompletedProperties;
    };
    /**
     * Sets the trainingCompletedProperties property value. The trainingCompletedProperties property
     * @param value Value to set for the trainingCompletedProperties property.
     */
    public set trainingCompletedProperties(value: UserTrainingContentEventInfo | undefined) {
        this._trainingCompletedProperties = value;
    };
    /**
     * Gets the trainingUpdatedProperties property value. The trainingUpdatedProperties property
     * @returns a userTrainingContentEventInfo
     */
    public get trainingUpdatedProperties() {
        return this._trainingUpdatedProperties;
    };
    /**
     * Sets the trainingUpdatedProperties property value. The trainingUpdatedProperties property
     * @param value Value to set for the trainingUpdatedProperties property.
     */
    public set trainingUpdatedProperties(value: UserTrainingContentEventInfo | undefined) {
        this._trainingUpdatedProperties = value;
    };
}
