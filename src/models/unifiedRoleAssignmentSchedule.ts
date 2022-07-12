import {AdminMember1, RequestSchedule, UnifiedRoleEligibilitySchedule, UnifiedRoleScheduleBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentSchedule extends UnifiedRoleScheduleBase implements Parsable {
    /** If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand. */
    private _activatedUsing?: UnifiedRoleEligibilitySchedule | AdminMember1 | undefined;
    /** Type of the assignment which can either be Assigned or Activated. Supports $filter (eq, ne). */
    private _assignmentType?: string | undefined;
    /** How the assignments is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleAssignmentSchedule can be managed by the caller. Supports $filter (eq, ne). */
    private _memberType?: string | undefined;
    /** The period of the role assignment. It can represent a single occurrence or multiple recurrences. */
    private _scheduleInfo?: RequestSchedule | AdminMember1 | undefined;
    /**
     * Gets the activatedUsing property value. If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand.
     * @returns a admin
     */
    public get activatedUsing() {
        return this._activatedUsing;
    };
    /**
     * Sets the activatedUsing property value. If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand.
     * @param value Value to set for the activatedUsing property.
     */
    public set activatedUsing(value: UnifiedRoleEligibilitySchedule | AdminMember1 | undefined) {
        this._activatedUsing = value;
    };
    /**
     * Gets the assignmentType property value. Type of the assignment which can either be Assigned or Activated. Supports $filter (eq, ne).
     * @returns a string
     */
    public get assignmentType() {
        return this._assignmentType;
    };
    /**
     * Sets the assignmentType property value. Type of the assignment which can either be Assigned or Activated. Supports $filter (eq, ne).
     * @param value Value to set for the assignmentType property.
     */
    public set assignmentType(value: string | undefined) {
        this._assignmentType = value;
    };
    /**
     * Instantiates a new UnifiedRoleAssignmentSchedule and sets the default values.
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
     * Gets the memberType property value. How the assignments is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleAssignmentSchedule can be managed by the caller. Supports $filter (eq, ne).
     * @returns a string
     */
    public get memberType() {
        return this._memberType;
    };
    /**
     * Sets the memberType property value. How the assignments is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleAssignmentSchedule can be managed by the caller. Supports $filter (eq, ne).
     * @param value Value to set for the memberType property.
     */
    public set memberType(value: string | undefined) {
        this._memberType = value;
    };
    /**
     * Gets the scheduleInfo property value. The period of the role assignment. It can represent a single occurrence or multiple recurrences.
     * @returns a admin
     */
    public get scheduleInfo() {
        return this._scheduleInfo;
    };
    /**
     * Sets the scheduleInfo property value. The period of the role assignment. It can represent a single occurrence or multiple recurrences.
     * @param value Value to set for the scheduleInfo property.
     */
    public set scheduleInfo(value: RequestSchedule | AdminMember1 | undefined) {
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
