import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {RequestSchedule, UnifiedRoleEligibilitySchedule, UnifiedRoleScheduleBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentSchedule extends UnifiedRoleScheduleBase implements Parsable {
    /** If the roleAssignmentSchedule is activated by a roleEligibilitySchedule, this is the link to that schedule. */
    private _activatedUsing?: UnifiedRoleEligibilitySchedule | undefined;
    /** Type of the assignment. It can either be Assigned or Activated. */
    private _assignmentType?: string | undefined;
    /** Membership type of the assignment. It can either be Inherited, Direct, or Group. */
    private _memberType?: string | undefined;
    /** The schedule object of the role assignment request. */
    private _scheduleInfo?: RequestSchedule | undefined;
    /**
     * Gets the activatedUsing property value. If the roleAssignmentSchedule is activated by a roleEligibilitySchedule, this is the link to that schedule.
     * @returns a unifiedRoleEligibilitySchedule
     */
    public get activatedUsing() {
        return this._activatedUsing;
    };
    /**
     * Sets the activatedUsing property value. If the roleAssignmentSchedule is activated by a roleEligibilitySchedule, this is the link to that schedule.
     * @param value Value to set for the activatedUsing property.
     */
    public set activatedUsing(value: UnifiedRoleEligibilitySchedule | undefined) {
        this._activatedUsing = value;
    };
    /**
     * Gets the assignmentType property value. Type of the assignment. It can either be Assigned or Activated.
     * @returns a string
     */
    public get assignmentType() {
        return this._assignmentType;
    };
    /**
     * Sets the assignmentType property value. Type of the assignment. It can either be Assigned or Activated.
     * @param value Value to set for the assignmentType property.
     */
    public set assignmentType(value: string | undefined) {
        this._assignmentType = value;
    };
    /**
     * Instantiates a new unifiedRoleAssignmentSchedule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activatedUsing": n => { this.activatedUsing = n.getObjectValue<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
            "assignmentType": n => { this.assignmentType = n.getStringValue(); },
            "memberType": n => { this.memberType = n.getStringValue(); },
            "scheduleInfo": n => { this.scheduleInfo = n.getObjectValue<RequestSchedule>(createRequestScheduleFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the memberType property value. Membership type of the assignment. It can either be Inherited, Direct, or Group.
     * @returns a string
     */
    public get memberType() {
        return this._memberType;
    };
    /**
     * Sets the memberType property value. Membership type of the assignment. It can either be Inherited, Direct, or Group.
     * @param value Value to set for the memberType property.
     */
    public set memberType(value: string | undefined) {
        this._memberType = value;
    };
    /**
     * Gets the scheduleInfo property value. The schedule object of the role assignment request.
     * @returns a requestSchedule
     */
    public get scheduleInfo() {
        return this._scheduleInfo;
    };
    /**
     * Sets the scheduleInfo property value. The schedule object of the role assignment request.
     * @param value Value to set for the scheduleInfo property.
     */
    public set scheduleInfo(value: RequestSchedule | undefined) {
        this._scheduleInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UnifiedRoleEligibilitySchedule>("activatedUsing", this.activatedUsing);
        writer.writeStringValue("assignmentType", this.assignmentType);
        writer.writeStringValue("memberType", this.memberType);
        writer.writeObjectValue<RequestSchedule>("scheduleInfo", this.scheduleInfo);
    };
}
