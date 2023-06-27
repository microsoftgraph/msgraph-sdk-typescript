import {ChangeTrackedEntity} from './changeTrackedEntity';
import {ScheduleChangeRequestActor} from './scheduleChangeRequestActor';
import {ScheduleChangeState} from './scheduleChangeState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ScheduleChangeRequest extends ChangeTrackedEntity, Parsable {
    /**
     * The assignedTo property
     */
    assignedTo?: ScheduleChangeRequestActor | undefined;
    /**
     * The managerActionDateTime property
     */
    managerActionDateTime?: Date | undefined;
    /**
     * The managerActionMessage property
     */
    managerActionMessage?: string | undefined;
    /**
     * The managerUserId property
     */
    managerUserId?: string | undefined;
    /**
     * The senderDateTime property
     */
    senderDateTime?: Date | undefined;
    /**
     * The senderMessage property
     */
    senderMessage?: string | undefined;
    /**
     * The senderUserId property
     */
    senderUserId?: string | undefined;
    /**
     * The state property
     */
    state?: ScheduleChangeState | undefined;
}
