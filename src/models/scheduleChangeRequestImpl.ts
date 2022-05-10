import {ChangeTrackedEntityImpl} from './index';
import {ScheduleChangeRequest} from './scheduleChangeRequest';
import {ScheduleChangeRequestActor} from './scheduleChangeRequestActor';
import {ScheduleChangeState} from './scheduleChangeState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleChangeRequestImpl extends ChangeTrackedEntityImpl implements Parsable, ScheduleChangeRequest {
    /** The assignedTo property  */
    assignedTo?: ScheduleChangeRequestActor | undefined;
    /** The managerActionDateTime property  */
    managerActionDateTime?: Date | undefined;
    /** The managerActionMessage property  */
    managerActionMessage?: string | undefined;
    /** The managerUserId property  */
    managerUserId?: string | undefined;
    /** The senderDateTime property  */
    senderDateTime?: Date | undefined;
    /** The senderMessage property  */
    senderMessage?: string | undefined;
    /** The senderUserId property  */
    senderUserId?: string | undefined;
    /** The state property  */
    state?: ScheduleChangeState | undefined;
    /**
     * Instantiates a new scheduleChangeRequest and sets the default values.
     * @param scheduleChangeRequestParameterValue 
     */
    public constructor(scheduleChangeRequestParameterValue?: ScheduleChangeRequest | undefined) {
        super();
        this.assignedTo = scheduleChangeRequestParameterValue?.assignedTo ;
        this.managerActionDateTime = scheduleChangeRequestParameterValue?.managerActionDateTime ;
        this.managerActionMessage = scheduleChangeRequestParameterValue?.managerActionMessage ;
        this.managerUserId = scheduleChangeRequestParameterValue?.managerUserId ;
        this.senderDateTime = scheduleChangeRequestParameterValue?.senderDateTime ;
        this.senderMessage = scheduleChangeRequestParameterValue?.senderMessage ;
        this.senderUserId = scheduleChangeRequestParameterValue?.senderUserId ;
        this.state = scheduleChangeRequestParameterValue?.state ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignedTo){
        if(this.assignedTo)
        writer.writeEnumValue<ScheduleChangeRequestActor>("assignedTo", this.assignedTo);
        }
        if(this.managerActionDateTime){
        if(this.managerActionDateTime)
        writer.writeDateValue("managerActionDateTime", this.managerActionDateTime);
        }
        if(this.managerActionMessage){
        if(this.managerActionMessage)
        writer.writeStringValue("managerActionMessage", this.managerActionMessage);
        }
        if(this.managerUserId){
        if(this.managerUserId)
        writer.writeStringValue("managerUserId", this.managerUserId);
        }
        if(this.senderDateTime){
        if(this.senderDateTime)
        writer.writeDateValue("senderDateTime", this.senderDateTime);
        }
        if(this.senderMessage){
        if(this.senderMessage)
        writer.writeStringValue("senderMessage", this.senderMessage);
        }
        if(this.senderUserId){
        if(this.senderUserId)
        writer.writeStringValue("senderUserId", this.senderUserId);
        }
        if(this.state){
        if(this.state)
        writer.writeEnumValue<ScheduleChangeState>("state", this.state);
        }
    };
}
