import {createEmailIdentityFromDiscriminatorValue} from './createEmailIdentityFromDiscriminatorValue';
import {createSimulationAutomationRunFromDiscriminatorValue} from './createSimulationAutomationRunFromDiscriminatorValue';
import {EmailIdentity, Entity, SimulationAutomationRun} from './index';
import {SimulationAutomationStatus} from './simulationAutomationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class SimulationAutomation extends Entity implements Parsable {
    /** The createdBy property */
    private _createdBy?: EmailIdentity | undefined;
    /** The createdDateTime property */
    private _createdDateTime?: Date | undefined;
    /** The description property */
    private _description?: string | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The lastModifiedBy property */
    private _lastModifiedBy?: EmailIdentity | undefined;
    /** The lastModifiedDateTime property */
    private _lastModifiedDateTime?: Date | undefined;
    /** The lastRunDateTime property */
    private _lastRunDateTime?: Date | undefined;
    /** The nextRunDateTime property */
    private _nextRunDateTime?: Date | undefined;
    /** The runs property */
    private _runs?: SimulationAutomationRun[] | undefined;
    /** The status property */
    private _status?: SimulationAutomationStatus | undefined;
    /**
     * Instantiates a new simulationAutomation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.simulationAutomation";
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a emailIdentity
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: EmailIdentity | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. The createdDateTime property
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The createdDateTime property
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
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
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<EmailIdentity>(createEmailIdentityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<EmailIdentity>(createEmailIdentityFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "lastRunDateTime": n => { this.lastRunDateTime = n.getDateValue(); },
            "nextRunDateTime": n => { this.nextRunDateTime = n.getDateValue(); },
            "runs": n => { this.runs = n.getCollectionOfObjectValues<SimulationAutomationRun>(createSimulationAutomationRunFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<SimulationAutomationStatus>(SimulationAutomationStatus); },
        };
    };
    /**
     * Gets the lastModifiedBy property value. The lastModifiedBy property
     * @returns a emailIdentity
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The lastModifiedBy property
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: EmailIdentity | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the lastRunDateTime property value. The lastRunDateTime property
     * @returns a Date
     */
    public get lastRunDateTime() {
        return this._lastRunDateTime;
    };
    /**
     * Sets the lastRunDateTime property value. The lastRunDateTime property
     * @param value Value to set for the lastRunDateTime property.
     */
    public set lastRunDateTime(value: Date | undefined) {
        this._lastRunDateTime = value;
    };
    /**
     * Gets the nextRunDateTime property value. The nextRunDateTime property
     * @returns a Date
     */
    public get nextRunDateTime() {
        return this._nextRunDateTime;
    };
    /**
     * Sets the nextRunDateTime property value. The nextRunDateTime property
     * @param value Value to set for the nextRunDateTime property.
     */
    public set nextRunDateTime(value: Date | undefined) {
        this._nextRunDateTime = value;
    };
    /**
     * Gets the runs property value. The runs property
     * @returns a simulationAutomationRun
     */
    public get runs() {
        return this._runs;
    };
    /**
     * Sets the runs property value. The runs property
     * @param value Value to set for the runs property.
     */
    public set runs(value: SimulationAutomationRun[] | undefined) {
        this._runs = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<EmailIdentity>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<EmailIdentity>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("lastRunDateTime", this.lastRunDateTime);
        writer.writeDateValue("nextRunDateTime", this.nextRunDateTime);
        writer.writeCollectionOfObjectValues<SimulationAutomationRun>("runs", this.runs);
        writer.writeEnumValue<SimulationAutomationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status property
     * @returns a simulationAutomationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: SimulationAutomationStatus | undefined) {
        this._status = value;
    };
}
