import {Entity} from './index';
import {SimulationAutomationRunStatus} from './simulationAutomationRunStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appCatalogs singleton.
 */
export class SimulationAutomationRun extends Entity implements Parsable {
    /** Date and time when the run ends in an attack simulation automation. */
    private _endDateTime?: Date | undefined;
    /** Unique identifier for the attack simulation campaign initiated in the attack simulation automation run. */
    private _simulationId?: string | undefined;
    /** Date and time when the run starts in an attack simulation automation. */
    private _startDateTime?: Date | undefined;
    /** Status of the attack simulation automation run. The possible values are: unknown, running, succeeded, failed, skipped, unknownFutureValue. */
    private _status?: SimulationAutomationRunStatus | undefined;
    /**
     * Instantiates a new simulationAutomationRun and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the endDateTime property value. Date and time when the run ends in an attack simulation automation.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. Date and time when the run ends in an attack simulation automation.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "simulationId": n => { this.simulationId = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<SimulationAutomationRunStatus>(SimulationAutomationRunStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("simulationId", this.simulationId);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeEnumValue<SimulationAutomationRunStatus>("status", this.status);
    };
    /**
     * Gets the simulationId property value. Unique identifier for the attack simulation campaign initiated in the attack simulation automation run.
     * @returns a string
     */
    public get simulationId() {
        return this._simulationId;
    };
    /**
     * Sets the simulationId property value. Unique identifier for the attack simulation campaign initiated in the attack simulation automation run.
     * @param value Value to set for the simulationId property.
     */
    public set simulationId(value: string | undefined) {
        this._simulationId = value;
    };
    /**
     * Gets the startDateTime property value. Date and time when the run starts in an attack simulation automation.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. Date and time when the run starts in an attack simulation automation.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the status property value. Status of the attack simulation automation run. The possible values are: unknown, running, succeeded, failed, skipped, unknownFutureValue.
     * @returns a simulationAutomationRunStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of the attack simulation automation run. The possible values are: unknown, running, succeeded, failed, skipped, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: SimulationAutomationRunStatus | undefined) {
        this._status = value;
    };
}
