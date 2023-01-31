import {createAttackSimulationUserFromDiscriminatorValue} from './createAttackSimulationUserFromDiscriminatorValue';
import {createUserSimulationEventInfoFromDiscriminatorValue} from './createUserSimulationEventInfoFromDiscriminatorValue';
import {createUserTrainingEventInfoFromDiscriminatorValue} from './createUserTrainingEventInfoFromDiscriminatorValue';
import {AttackSimulationUser, UserSimulationEventInfo, UserTrainingEventInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserSimulationDetails implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Number of trainings assigned to a user in an attack simulation and training campaign. */
    private _assignedTrainingsCount?: number | undefined;
    /** Number of trainings completed by a user in an attack simulation and training campaign. */
    private _completedTrainingsCount?: number | undefined;
    /** Date and time of the compromising online action by a user in an attack simulation and training campaign. */
    private _compromisedDateTime?: Date | undefined;
    /** Number of trainings in progress by a user in an attack simulation and training campaign. */
    private _inProgressTrainingsCount?: number | undefined;
    /** Indicates whether a user was compromised in an attack simulation and training campaign. */
    private _isCompromised?: boolean | undefined;
    private _odataType?: string | undefined;
    /** Date and time when a user reported the delivered payload as phishing in the attack simulation and training campaign. */
    private _reportedPhishDateTime?: Date | undefined;
    /** List of simulation events of a user in the attack simulation and training campaign. */
    private _simulationEvents?: UserSimulationEventInfo[] | undefined;
    /** User in an attack simulation and training campaign. */
    private _simulationUser?: AttackSimulationUser | undefined;
    /** List of training events of a user in the attack simulation and training campaign. */
    private _trainingEvents?: UserTrainingEventInfo[] | undefined;
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
     * Gets the assignedTrainingsCount property value. Number of trainings assigned to a user in an attack simulation and training campaign.
     * @returns a integer
     */
    public get assignedTrainingsCount() {
        return this._assignedTrainingsCount;
    };
    /**
     * Sets the assignedTrainingsCount property value. Number of trainings assigned to a user in an attack simulation and training campaign.
     * @param value Value to set for the assignedTrainingsCount property.
     */
    public set assignedTrainingsCount(value: number | undefined) {
        this._assignedTrainingsCount = value;
    };
    /**
     * Gets the completedTrainingsCount property value. Number of trainings completed by a user in an attack simulation and training campaign.
     * @returns a integer
     */
    public get completedTrainingsCount() {
        return this._completedTrainingsCount;
    };
    /**
     * Sets the completedTrainingsCount property value. Number of trainings completed by a user in an attack simulation and training campaign.
     * @param value Value to set for the completedTrainingsCount property.
     */
    public set completedTrainingsCount(value: number | undefined) {
        this._completedTrainingsCount = value;
    };
    /**
     * Gets the compromisedDateTime property value. Date and time of the compromising online action by a user in an attack simulation and training campaign.
     * @returns a Date
     */
    public get compromisedDateTime() {
        return this._compromisedDateTime;
    };
    /**
     * Sets the compromisedDateTime property value. Date and time of the compromising online action by a user in an attack simulation and training campaign.
     * @param value Value to set for the compromisedDateTime property.
     */
    public set compromisedDateTime(value: Date | undefined) {
        this._compromisedDateTime = value;
    };
    /**
     * Instantiates a new userSimulationDetails and sets the default values.
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
            "assignedTrainingsCount": n => { this.assignedTrainingsCount = n.getNumberValue(); },
            "completedTrainingsCount": n => { this.completedTrainingsCount = n.getNumberValue(); },
            "compromisedDateTime": n => { this.compromisedDateTime = n.getDateValue(); },
            "inProgressTrainingsCount": n => { this.inProgressTrainingsCount = n.getNumberValue(); },
            "isCompromised": n => { this.isCompromised = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "reportedPhishDateTime": n => { this.reportedPhishDateTime = n.getDateValue(); },
            "simulationEvents": n => { this.simulationEvents = n.getCollectionOfObjectValues<UserSimulationEventInfo>(createUserSimulationEventInfoFromDiscriminatorValue); },
            "simulationUser": n => { this.simulationUser = n.getObjectValue<AttackSimulationUser>(createAttackSimulationUserFromDiscriminatorValue); },
            "trainingEvents": n => { this.trainingEvents = n.getCollectionOfObjectValues<UserTrainingEventInfo>(createUserTrainingEventInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the inProgressTrainingsCount property value. Number of trainings in progress by a user in an attack simulation and training campaign.
     * @returns a integer
     */
    public get inProgressTrainingsCount() {
        return this._inProgressTrainingsCount;
    };
    /**
     * Sets the inProgressTrainingsCount property value. Number of trainings in progress by a user in an attack simulation and training campaign.
     * @param value Value to set for the inProgressTrainingsCount property.
     */
    public set inProgressTrainingsCount(value: number | undefined) {
        this._inProgressTrainingsCount = value;
    };
    /**
     * Gets the isCompromised property value. Indicates whether a user was compromised in an attack simulation and training campaign.
     * @returns a boolean
     */
    public get isCompromised() {
        return this._isCompromised;
    };
    /**
     * Sets the isCompromised property value. Indicates whether a user was compromised in an attack simulation and training campaign.
     * @param value Value to set for the isCompromised property.
     */
    public set isCompromised(value: boolean | undefined) {
        this._isCompromised = value;
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
     * Gets the reportedPhishDateTime property value. Date and time when a user reported the delivered payload as phishing in the attack simulation and training campaign.
     * @returns a Date
     */
    public get reportedPhishDateTime() {
        return this._reportedPhishDateTime;
    };
    /**
     * Sets the reportedPhishDateTime property value. Date and time when a user reported the delivered payload as phishing in the attack simulation and training campaign.
     * @param value Value to set for the reportedPhishDateTime property.
     */
    public set reportedPhishDateTime(value: Date | undefined) {
        this._reportedPhishDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("assignedTrainingsCount", this.assignedTrainingsCount);
        writer.writeNumberValue("completedTrainingsCount", this.completedTrainingsCount);
        writer.writeDateValue("compromisedDateTime", this.compromisedDateTime);
        writer.writeNumberValue("inProgressTrainingsCount", this.inProgressTrainingsCount);
        writer.writeBooleanValue("isCompromised", this.isCompromised);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDateValue("reportedPhishDateTime", this.reportedPhishDateTime);
        writer.writeCollectionOfObjectValues<UserSimulationEventInfo>("simulationEvents", this.simulationEvents);
        writer.writeObjectValue<AttackSimulationUser>("simulationUser", this.simulationUser);
        writer.writeCollectionOfObjectValues<UserTrainingEventInfo>("trainingEvents", this.trainingEvents);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the simulationEvents property value. List of simulation events of a user in the attack simulation and training campaign.
     * @returns a userSimulationEventInfo
     */
    public get simulationEvents() {
        return this._simulationEvents;
    };
    /**
     * Sets the simulationEvents property value. List of simulation events of a user in the attack simulation and training campaign.
     * @param value Value to set for the simulationEvents property.
     */
    public set simulationEvents(value: UserSimulationEventInfo[] | undefined) {
        this._simulationEvents = value;
    };
    /**
     * Gets the simulationUser property value. User in an attack simulation and training campaign.
     * @returns a attackSimulationUser
     */
    public get simulationUser() {
        return this._simulationUser;
    };
    /**
     * Sets the simulationUser property value. User in an attack simulation and training campaign.
     * @param value Value to set for the simulationUser property.
     */
    public set simulationUser(value: AttackSimulationUser | undefined) {
        this._simulationUser = value;
    };
    /**
     * Gets the trainingEvents property value. List of training events of a user in the attack simulation and training campaign.
     * @returns a userTrainingEventInfo
     */
    public get trainingEvents() {
        return this._trainingEvents;
    };
    /**
     * Sets the trainingEvents property value. List of training events of a user in the attack simulation and training campaign.
     * @param value Value to set for the trainingEvents property.
     */
    public set trainingEvents(value: UserTrainingEventInfo[] | undefined) {
        this._trainingEvents = value;
    };
}
