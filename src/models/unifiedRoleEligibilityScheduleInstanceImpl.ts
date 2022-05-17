import {UnifiedRoleScheduleInstanceBaseImpl} from './index';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleEligibilityScheduleInstanceImpl extends UnifiedRoleScheduleInstanceBaseImpl implements Parsable, UnifiedRoleEligibilityScheduleInstance {
    /** Time that the roleEligibilityScheduleInstance will expire. */
    endDateTime?: Date | undefined;
    /** Membership type of the assignment. It can either be Inherited, Direct, or Group. */
    memberType?: string | undefined;
    /** Identifier of the parent roleEligibilitySchedule for this instance. */
    roleEligibilityScheduleId?: string | undefined;
    /** Time that the roleEligibilityScheduleInstance will start. */
    startDateTime?: Date | undefined;
    /**
     * Instantiates a new unifiedRoleEligibilityScheduleInstance and sets the default values.
     * @param unifiedRoleEligibilityScheduleInstanceParameterValue 
     */
    public constructor(unifiedRoleEligibilityScheduleInstanceParameterValue?: UnifiedRoleEligibilityScheduleInstance | undefined) {
        super();
        this.endDateTime = unifiedRoleEligibilityScheduleInstanceParameterValue?.endDateTime ;
        this.memberType = unifiedRoleEligibilityScheduleInstanceParameterValue?.memberType ;
        this.roleEligibilityScheduleId = unifiedRoleEligibilityScheduleInstanceParameterValue?.roleEligibilityScheduleId ;
        this.startDateTime = unifiedRoleEligibilityScheduleInstanceParameterValue?.startDateTime ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.endDateTime){
        if(this.endDateTime)
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.memberType){
        if(this.memberType)
        writer.writeStringValue("memberType", this.memberType);
        }
        if(this.roleEligibilityScheduleId){
        if(this.roleEligibilityScheduleId)
        writer.writeStringValue("roleEligibilityScheduleId", this.roleEligibilityScheduleId);
        }
        if(this.startDateTime){
        if(this.startDateTime)
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
    };
}
