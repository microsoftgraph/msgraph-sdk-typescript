import { type ScheduleChangeRequest } from './scheduleChangeRequest';
import { ScheduleChangeRequestActor } from './scheduleChangeRequestActor';
import { ScheduleChangeState } from './scheduleChangeState';
import { serializeChangeTrackedEntity } from './serializeChangeTrackedEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeScheduleChangeRequest(writer: SerializationWriter, scheduleChangeRequest: ScheduleChangeRequest | undefined = {} as ScheduleChangeRequest) : void {
        serializeChangeTrackedEntity(writer, scheduleChangeRequest)
        writer.writeEnumValue<ScheduleChangeRequestActor>("assignedTo", scheduleChangeRequest.assignedTo);
        writer.writeStringValue("managerActionMessage", scheduleChangeRequest.managerActionMessage);
        writer.writeStringValue("senderMessage", scheduleChangeRequest.senderMessage);
        writer.writeEnumValue<ScheduleChangeState>("state", scheduleChangeRequest.state);
}
