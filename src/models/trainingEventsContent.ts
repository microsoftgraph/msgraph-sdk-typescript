import {createAssignedTrainingInfoFromDiscriminatorValue} from './createAssignedTrainingInfoFromDiscriminatorValue';
import {AssignedTrainingInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TrainingEventsContent implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The assignedTrainingsInfos property */
    private _assignedTrainingsInfos?: AssignedTrainingInfo[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The trainingsAssignedUserCount property */
    private _trainingsAssignedUserCount?: number | undefined;
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
     * Gets the assignedTrainingsInfos property value. The assignedTrainingsInfos property
     * @returns a assignedTrainingInfo
     */
    public get assignedTrainingsInfos() {
        return this._assignedTrainingsInfos;
    };
    /**
     * Sets the assignedTrainingsInfos property value. The assignedTrainingsInfos property
     * @param value Value to set for the assignedTrainingsInfos property.
     */
    public set assignedTrainingsInfos(value: AssignedTrainingInfo[] | undefined) {
        this._assignedTrainingsInfos = value;
    };
    /**
     * Instantiates a new trainingEventsContent and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.trainingEventsContent";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignedTrainingsInfos": n => { this.assignedTrainingsInfos = n.getCollectionOfObjectValues<AssignedTrainingInfo>(createAssignedTrainingInfoFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "trainingsAssignedUserCount": n => { this.trainingsAssignedUserCount = n.getNumberValue(); },
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
        writer.writeCollectionOfObjectValues<AssignedTrainingInfo>("assignedTrainingsInfos", this.assignedTrainingsInfos);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("trainingsAssignedUserCount", this.trainingsAssignedUserCount);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the trainingsAssignedUserCount property value. The trainingsAssignedUserCount property
     * @returns a integer
     */
    public get trainingsAssignedUserCount() {
        return this._trainingsAssignedUserCount;
    };
    /**
     * Sets the trainingsAssignedUserCount property value. The trainingsAssignedUserCount property
     * @param value Value to set for the trainingsAssignedUserCount property.
     */
    public set trainingsAssignedUserCount(value: number | undefined) {
        this._trainingsAssignedUserCount = value;
    };
}