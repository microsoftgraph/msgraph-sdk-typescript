import {createUserTrainingContentEventInfoFromDiscriminatorValue} from './createUserTrainingContentEventInfoFromDiscriminatorValue';
import {UserTrainingContentEventInfo} from './index';
import {TrainingStatus} from './trainingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserTrainingEventInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Display name of the training. */
    private _displayName?: string | undefined;
    /** Latest status of the training assigned to the user. Possible values are: unknown, assigned, inProgress, completed, overdue, unknownFutureValue. */
    private _latestTrainingStatus?: TrainingStatus | undefined;
    private _odataType?: string | undefined;
    /** Event details of the training when it was assigned to the user. */
    private _trainingAssignedProperties?: UserTrainingContentEventInfo | undefined;
    /** Event details of the training when it was completed by the user. */
    private _trainingCompletedProperties?: UserTrainingContentEventInfo | undefined;
    /** Event details of the training when it was updated/in-progress by the user. */
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
    };
    /**
     * Gets the displayName property value. Display name of the training.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the training.
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
     * Gets the latestTrainingStatus property value. Latest status of the training assigned to the user. Possible values are: unknown, assigned, inProgress, completed, overdue, unknownFutureValue.
     * @returns a trainingStatus
     */
    public get latestTrainingStatus() {
        return this._latestTrainingStatus;
    };
    /**
     * Sets the latestTrainingStatus property value. Latest status of the training assigned to the user. Possible values are: unknown, assigned, inProgress, completed, overdue, unknownFutureValue.
     * @param value Value to set for the latestTrainingStatus property.
     */
    public set latestTrainingStatus(value: TrainingStatus | undefined) {
        this._latestTrainingStatus = value;
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<TrainingStatus>("latestTrainingStatus", this.latestTrainingStatus);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<UserTrainingContentEventInfo>("trainingAssignedProperties", this.trainingAssignedProperties);
        writer.writeObjectValue<UserTrainingContentEventInfo>("trainingCompletedProperties", this.trainingCompletedProperties);
        writer.writeObjectValue<UserTrainingContentEventInfo>("trainingUpdatedProperties", this.trainingUpdatedProperties);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the trainingAssignedProperties property value. Event details of the training when it was assigned to the user.
     * @returns a userTrainingContentEventInfo
     */
    public get trainingAssignedProperties() {
        return this._trainingAssignedProperties;
    };
    /**
     * Sets the trainingAssignedProperties property value. Event details of the training when it was assigned to the user.
     * @param value Value to set for the trainingAssignedProperties property.
     */
    public set trainingAssignedProperties(value: UserTrainingContentEventInfo | undefined) {
        this._trainingAssignedProperties = value;
    };
    /**
     * Gets the trainingCompletedProperties property value. Event details of the training when it was completed by the user.
     * @returns a userTrainingContentEventInfo
     */
    public get trainingCompletedProperties() {
        return this._trainingCompletedProperties;
    };
    /**
     * Sets the trainingCompletedProperties property value. Event details of the training when it was completed by the user.
     * @param value Value to set for the trainingCompletedProperties property.
     */
    public set trainingCompletedProperties(value: UserTrainingContentEventInfo | undefined) {
        this._trainingCompletedProperties = value;
    };
    /**
     * Gets the trainingUpdatedProperties property value. Event details of the training when it was updated/in-progress by the user.
     * @returns a userTrainingContentEventInfo
     */
    public get trainingUpdatedProperties() {
        return this._trainingUpdatedProperties;
    };
    /**
     * Sets the trainingUpdatedProperties property value. Event details of the training when it was updated/in-progress by the user.
     * @param value Value to set for the trainingUpdatedProperties property.
     */
    public set trainingUpdatedProperties(value: UserTrainingContentEventInfo | undefined) {
        this._trainingUpdatedProperties = value;
    };
}
