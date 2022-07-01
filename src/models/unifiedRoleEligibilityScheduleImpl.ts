import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {RequestScheduleImpl, UnifiedRoleScheduleBaseImpl} from './index';
import {RequestSchedule} from './requestSchedule';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class UnifiedRoleEligibilityScheduleImpl extends UnifiedRoleScheduleBaseImpl implements UnifiedRoleEligibilitySchedule {
    /** Membership type of the eligible assignment. It can either be Inherited, Direct, or Group. */
    private _memberType?: string | undefined;
    /** The schedule object of the eligible role assignment request. */
    private _scheduleInfo?: RequestSchedule | undefined;
    /**
     * Instantiates a new unifiedRoleEligibilitySchedule and sets the default values.
     * @param unifiedRoleEligibilityScheduleParameterValue 
     */
    public constructor(unifiedRoleEligibilityScheduleParameterValue?: UnifiedRoleEligibilitySchedule | undefined) {
        super(unifiedRoleEligibilityScheduleParameterValue);
        this._memberType = unifiedRoleEligibilityScheduleParameterValue?.memberType;
        this._scheduleInfo = unifiedRoleEligibilityScheduleParameterValue?.scheduleInfo;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "memberType": n => { this.memberType = n.getStringValue(); },
            "scheduleInfo": n => { this.scheduleInfo = n.getObjectValue<RequestScheduleImpl>(createRequestScheduleFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the memberType property value. Membership type of the eligible assignment. It can either be Inherited, Direct, or Group.
     * @returns a string
     */
    public get memberType() {
        return this._memberType;
    };
    /**
     * Sets the memberType property value. Membership type of the eligible assignment. It can either be Inherited, Direct, or Group.
     * @param value Value to set for the memberType property.
     */
    public set memberType(value: string | undefined) {
        if(value) {
            this._memberType = value;
        }
    };
    /**
     * Gets the scheduleInfo property value. The schedule object of the eligible role assignment request.
     * @returns a RequestScheduleInterface
     */
    public get scheduleInfo() {
        return this._scheduleInfo;
    };
    /**
     * Sets the scheduleInfo property value. The schedule object of the eligible role assignment request.
     * @param value Value to set for the scheduleInfo property.
     */
    public set scheduleInfo(value: RequestSchedule | undefined) {
        if(value) {
            this._scheduleInfo = value instanceof RequestScheduleImpl? value as RequestScheduleImpl: new RequestScheduleImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.memberType){
            writer.writeStringValue("memberType", this.memberType);
        }
        if(this.scheduleInfo){
            writer.writeObjectValue<RequestScheduleImpl>("scheduleInfo", (this.scheduleInfo instanceof RequestScheduleImpl? this.scheduleInfo as RequestScheduleImpl: new RequestScheduleImpl(this.scheduleInfo)));
        }
    };
}
