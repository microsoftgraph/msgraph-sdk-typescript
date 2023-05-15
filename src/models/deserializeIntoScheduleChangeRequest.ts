import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {ScheduleChangeRequest} from './scheduleChangeRequest';
import {ScheduleChangeRequestActor} from './scheduleChangeRequestActor';
import {ScheduleChangeState} from './scheduleChangeState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleChangeRequest(scheduleChangeRequest: ScheduleChangeRequest | undefined = {} as ScheduleChangeRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(scheduleChangeRequest),
        "assignedTo": n => { scheduleChangeRequest.assignedTo = n.getEnumValue<ScheduleChangeRequestActor>(ScheduleChangeRequestActor); },
        "managerActionDateTime": n => { scheduleChangeRequest.managerActionDateTime = n.getDateValue(); },
        "managerActionMessage": n => { scheduleChangeRequest.managerActionMessage = n.getStringValue(); },
        "managerUserId": n => { scheduleChangeRequest.managerUserId = n.getStringValue(); },
        "senderDateTime": n => { scheduleChangeRequest.senderDateTime = n.getDateValue(); },
        "senderMessage": n => { scheduleChangeRequest.senderMessage = n.getStringValue(); },
        "senderUserId": n => { scheduleChangeRequest.senderUserId = n.getStringValue(); },
        "state": n => { scheduleChangeRequest.state = n.getEnumValue<ScheduleChangeState>(ScheduleChangeState); },
    }
}
