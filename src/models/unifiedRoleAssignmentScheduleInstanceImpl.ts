import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {UnifiedRoleEligibilityScheduleInstanceImpl, UnifiedRoleScheduleInstanceBaseImpl} from './index';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentScheduleInstanceImpl extends UnifiedRoleScheduleInstanceBaseImpl implements UnifiedRoleAssignmentScheduleInstance {
    /** If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand. */
    private _activatedUsing?: UnifiedRoleEligibilityScheduleInstance | undefined;
    /** Type of the assignment which can either be Assigned or Activated. Supports $filter (eq, ne). */
    private _assignmentType?: string | undefined;
    /** The end date of the schedule instance. */
    private _endDateTime?: Date | undefined;
    /** How the assignments is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleAssignmentSchedule can be managed by the caller. Supports $filter (eq, ne). */
    private _memberType?: string | undefined;
    /** The identifier of the role assignment in Azure AD. */
    private _roleAssignmentOriginId?: string | undefined;
    /** The identifier of the unifiedRoleAssignmentSchedule object from which this instance was created. */
    private _roleAssignmentScheduleId?: string | undefined;
    /** When this instance starts. */
    private _startDateTime?: Date | undefined;
    /**
     * Gets the activatedUsing property value. If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand.
     * @returns a UnifiedRoleEligibilityScheduleInstanceInterface
     */
    public get activatedUsing() {
        return this._activatedUsing;
    };
    /**
     * Sets the activatedUsing property value. If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand.
     * @param value Value to set for the activatedUsing property.
     */
    public set activatedUsing(value: UnifiedRoleEligibilityScheduleInstance | undefined) {
        if(value) {
            this._activatedUsing = value instanceof UnifiedRoleEligibilityScheduleInstanceImpl? value : new UnifiedRoleEligibilityScheduleInstanceImpl(value);
        }
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
        if(value) {
            this._assignmentType = value;
        }
    };
    /**
     * Instantiates a new UnifiedRoleAssignmentScheduleInstance and sets the default values.
     * @param unifiedRoleAssignmentScheduleInstanceParameterValue 
     */
    public constructor(unifiedRoleAssignmentScheduleInstanceParameterValue?: UnifiedRoleAssignmentScheduleInstance | undefined) {
        super(unifiedRoleAssignmentScheduleInstanceParameterValue);
        this._activatedUsing = unifiedRoleAssignmentScheduleInstanceParameterValue?.activatedUsing;
        this._assignmentType = unifiedRoleAssignmentScheduleInstanceParameterValue?.assignmentType;
        this._endDateTime = unifiedRoleAssignmentScheduleInstanceParameterValue?.endDateTime;
        this._memberType = unifiedRoleAssignmentScheduleInstanceParameterValue?.memberType;
        this._roleAssignmentOriginId = unifiedRoleAssignmentScheduleInstanceParameterValue?.roleAssignmentOriginId;
        this._roleAssignmentScheduleId = unifiedRoleAssignmentScheduleInstanceParameterValue?.roleAssignmentScheduleId;
        this._startDateTime = unifiedRoleAssignmentScheduleInstanceParameterValue?.startDateTime;
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
        if(value) {
            this._endDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activatedUsing": n => { this.activatedUsing = n.getObjectValue<UnifiedRoleEligibilityScheduleInstanceImpl>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
            "assignmentType": n => { this.assignmentType = n.getStringValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "memberType": n => { this.memberType = n.getStringValue(); },
            "roleAssignmentOriginId": n => { this.roleAssignmentOriginId = n.getStringValue(); },
            "roleAssignmentScheduleId": n => { this.roleAssignmentScheduleId = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
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
        if(value) {
            this._memberType = value;
        }
    };
    /**
     * Gets the roleAssignmentOriginId property value. The identifier of the role assignment in Azure AD.
     * @returns a string
     */
    public get roleAssignmentOriginId() {
        return this._roleAssignmentOriginId;
    };
    /**
     * Sets the roleAssignmentOriginId property value. The identifier of the role assignment in Azure AD.
     * @param value Value to set for the roleAssignmentOriginId property.
     */
    public set roleAssignmentOriginId(value: string | undefined) {
        if(value) {
            this._roleAssignmentOriginId = value;
        }
    };
    /**
     * Gets the roleAssignmentScheduleId property value. The identifier of the unifiedRoleAssignmentSchedule object from which this instance was created.
     * @returns a string
     */
    public get roleAssignmentScheduleId() {
        return this._roleAssignmentScheduleId;
    };
    /**
     * Sets the roleAssignmentScheduleId property value. The identifier of the unifiedRoleAssignmentSchedule object from which this instance was created.
     * @param value Value to set for the roleAssignmentScheduleId property.
     */
    public set roleAssignmentScheduleId(value: string | undefined) {
        if(value) {
            this._roleAssignmentScheduleId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activatedUsing){
            writer.writeObjectValue<UnifiedRoleEligibilityScheduleInstanceImpl>("activatedUsing", (!this.activatedUsing || this.activatedUsing instanceof UnifiedRoleEligibilityScheduleInstanceImpl? this.activatedUsing : new UnifiedRoleEligibilityScheduleInstanceImpl(this.activatedUsing)));
        }
        if(this.assignmentType){
            writer.writeStringValue("assignmentType", this.assignmentType);
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.memberType){
            writer.writeStringValue("memberType", this.memberType);
        }
        if(this.roleAssignmentOriginId){
            writer.writeStringValue("roleAssignmentOriginId", this.roleAssignmentOriginId);
        }
        if(this.roleAssignmentScheduleId){
            writer.writeStringValue("roleAssignmentScheduleId", this.roleAssignmentScheduleId);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
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
        if(value) {
            this._startDateTime = value;
        }
    };
}
