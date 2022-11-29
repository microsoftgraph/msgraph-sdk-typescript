import {ChangeTrackedEntity} from './index';
import {ScheduleChangeRequestActor} from './scheduleChangeRequestActor';
import {ScheduleChangeState} from './scheduleChangeState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleChangeRequest extends ChangeTrackedEntity implements Parsable {
    /** The assignedTo property */
    private _assignedTo?: ScheduleChangeRequestActor | undefined;
    /** The managerActionDateTime property */
    private _managerActionDateTime?: Date | undefined;
    /** The managerActionMessage property */
    private _managerActionMessage?: string | undefined;
    /** The managerUserId property */
    private _managerUserId?: string | undefined;
    /** The senderDateTime property */
    private _senderDateTime?: Date | undefined;
    /** The senderMessage property */
    private _senderMessage?: string | undefined;
    /** The senderUserId property */
    private _senderUserId?: string | undefined;
    /** The state property */
    private _state?: ScheduleChangeState | undefined;
    /**
     * Gets the assignedTo property value. The assignedTo property
     * @returns a scheduleChangeRequestActor
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Sets the assignedTo property value. The assignedTo property
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: ScheduleChangeRequestActor | undefined) {
        this._assignedTo = value;
    };
    /**
     * Instantiates a new ScheduleChangeRequest and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.scheduleChangeRequest";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignedTo": n => { this.assignedTo = n.getEnumValue<ScheduleChangeRequestActor>(ScheduleChangeRequestActor); },
            "managerActionDateTime": n => { this.managerActionDateTime = n.getDateValue(); },
            "managerActionMessage": n => { this.managerActionMessage = n.getStringValue(); },
            "managerUserId": n => { this.managerUserId = n.getStringValue(); },
            "senderDateTime": n => { this.senderDateTime = n.getDateValue(); },
            "senderMessage": n => { this.senderMessage = n.getStringValue(); },
            "senderUserId": n => { this.senderUserId = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<ScheduleChangeState>(ScheduleChangeState); },
        };
    };
    /**
     * Gets the managerActionDateTime property value. The managerActionDateTime property
     * @returns a Date
     */
    public get managerActionDateTime() {
        return this._managerActionDateTime;
    };
    /**
     * Sets the managerActionDateTime property value. The managerActionDateTime property
     * @param value Value to set for the managerActionDateTime property.
     */
    public set managerActionDateTime(value: Date | undefined) {
        this._managerActionDateTime = value;
    };
    /**
     * Gets the managerActionMessage property value. The managerActionMessage property
     * @returns a string
     */
    public get managerActionMessage() {
        return this._managerActionMessage;
    };
    /**
     * Sets the managerActionMessage property value. The managerActionMessage property
     * @param value Value to set for the managerActionMessage property.
     */
    public set managerActionMessage(value: string | undefined) {
        this._managerActionMessage = value;
    };
    /**
     * Gets the managerUserId property value. The managerUserId property
     * @returns a string
     */
    public get managerUserId() {
        return this._managerUserId;
    };
    /**
     * Sets the managerUserId property value. The managerUserId property
     * @param value Value to set for the managerUserId property.
     */
    public set managerUserId(value: string | undefined) {
        this._managerUserId = value;
    };
    /**
     * Gets the senderDateTime property value. The senderDateTime property
     * @returns a Date
     */
    public get senderDateTime() {
        return this._senderDateTime;
    };
    /**
     * Sets the senderDateTime property value. The senderDateTime property
     * @param value Value to set for the senderDateTime property.
     */
    public set senderDateTime(value: Date | undefined) {
        this._senderDateTime = value;
    };
    /**
     * Gets the senderMessage property value. The senderMessage property
     * @returns a string
     */
    public get senderMessage() {
        return this._senderMessage;
    };
    /**
     * Sets the senderMessage property value. The senderMessage property
     * @param value Value to set for the senderMessage property.
     */
    public set senderMessage(value: string | undefined) {
        this._senderMessage = value;
    };
    /**
     * Gets the senderUserId property value. The senderUserId property
     * @returns a string
     */
    public get senderUserId() {
        return this._senderUserId;
    };
    /**
     * Sets the senderUserId property value. The senderUserId property
     * @param value Value to set for the senderUserId property.
     */
    public set senderUserId(value: string | undefined) {
        this._senderUserId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ScheduleChangeRequestActor>("assignedTo", this.assignedTo);
        writer.writeStringValue("managerActionMessage", this.managerActionMessage);
        writer.writeStringValue("senderMessage", this.senderMessage);
        writer.writeEnumValue<ScheduleChangeState>("state", this.state);
    };
    /**
     * Gets the state property value. The state property
     * @returns a scheduleChangeState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: ScheduleChangeState | undefined) {
        this._state = value;
    };
}
