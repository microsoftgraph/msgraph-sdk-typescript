import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {RequestScheduleImpl, UnifiedRoleScheduleBaseImpl} from './index';
import {RequestSchedule} from './requestSchedule';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class UnifiedRoleEligibilityScheduleImpl extends UnifiedRoleScheduleBaseImpl implements Parsable, UnifiedRoleEligibilitySchedule {
    /** Membership type of the eligible assignment. It can either be Inherited, Direct, or Group. */
    public memberType?: string | undefined;
    /** The schedule object of the eligible role assignment request. */
    public scheduleInfo?: RequestSchedule | undefined;
    /**
     * Instantiates a new unifiedRoleEligibilitySchedule and sets the default values.
     * @param unifiedRoleEligibilityScheduleParameterValue 
     */
    public constructor(unifiedRoleEligibilityScheduleParameterValue?: UnifiedRoleEligibilitySchedule | undefined) {
        super();
        this.memberType = unifiedRoleEligibilityScheduleParameterValue?.memberType ;
        this.scheduleInfo = unifiedRoleEligibilityScheduleParameterValue?.scheduleInfo ;
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
        writer.writeObjectValue<RequestScheduleImpl>("scheduleInfo", new RequestScheduleImpl(this.scheduleInfo));
        }
    };
}
