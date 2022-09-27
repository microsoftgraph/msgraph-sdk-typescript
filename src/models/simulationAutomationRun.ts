import {Entity} from './index';
import {SimulationAutomationRunStatus} from './simulationAutomationRunStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class SimulationAutomationRun extends Entity implements Parsable {
    /** The endDateTime property */
    private _endDateTime?: Date | undefined;
    /** The simulationId property */
    private _simulationId?: string | undefined;
    /** The startDateTime property */
    private _startDateTime?: Date | undefined;
    /** The status property */
    private _status?: SimulationAutomationRunStatus | undefined;
    /**
     * Instantiates a new simulationAutomationRun and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.simulationAutomationRun";
    };
    /**
     * Gets the endDateTime property value. The endDateTime property
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The endDateTime property
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
     * Gets the simulationId property value. The simulationId property
     * @returns a string
     */
    public get simulationId() {
        return this._simulationId;
    };
    /**
     * Sets the simulationId property value. The simulationId property
     * @param value Value to set for the simulationId property.
     */
    public set simulationId(value: string | undefined) {
        this._simulationId = value;
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a simulationAutomationRunStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: SimulationAutomationRunStatus | undefined) {
        this._status = value;
    };
}
