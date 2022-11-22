import {UnifiedRoleScheduleInstanceBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleEligibilityScheduleInstance extends UnifiedRoleScheduleInstanceBase implements Parsable {
    /** The end date of the schedule instance. */
    private _endDateTime?: Date | undefined;
    /** How the role eligibility is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleEligibilitySchedule can be managed by the caller. Supports $filter (eq, ne). */
    private _memberType?: string | undefined;
    /** The identifier of the unifiedRoleEligibilitySchedule object from which this instance was created. Supports $filter (eq, ne). */
    private _roleEligibilityScheduleId?: string | undefined;
    /** When this instance starts. */
    private _startDateTime?: Date | undefined;
    /**
     * Instantiates a new unifiedRoleEligibilityScheduleInstance and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the endDateTime property value. The end date of the schedule instance.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The end date of the schedule instance.
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
            "memberType": n => { this.memberType = n.getStringValue(); },
            "roleEligibilityScheduleId": n => { this.roleEligibilityScheduleId = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the memberType property value. How the role eligibility is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleEligibilitySchedule can be managed by the caller. Supports $filter (eq, ne).
     * @returns a string
     */
    public get memberType() {
        return this._memberType;
    };
    /**
     * Sets the memberType property value. How the role eligibility is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleEligibilitySchedule can be managed by the caller. Supports $filter (eq, ne).
     * @param value Value to set for the memberType property.
     */
    public set memberType(value: string | undefined) {
        this._memberType = value;
    };
    /**
     * Gets the roleEligibilityScheduleId property value. The identifier of the unifiedRoleEligibilitySchedule object from which this instance was created. Supports $filter (eq, ne).
     * @returns a string
     */
    public get roleEligibilityScheduleId() {
        return this._roleEligibilityScheduleId;
    };
    /**
     * Sets the roleEligibilityScheduleId property value. The identifier of the unifiedRoleEligibilitySchedule object from which this instance was created. Supports $filter (eq, ne).
     * @param value Value to set for the roleEligibilityScheduleId property.
     */
    public set roleEligibilityScheduleId(value: string | undefined) {
        this._roleEligibilityScheduleId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("memberType", this.memberType);
        writer.writeStringValue("roleEligibilityScheduleId", this.roleEligibilityScheduleId);
        writer.writeDateValue("startDateTime", this.startDateTime);
    };
    /**
     * Gets the startDateTime property value. When this instance starts.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. When this instance starts.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
