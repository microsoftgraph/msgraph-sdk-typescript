import {ChangeTrackedEntity} from './changeTrackedEntity';
import {ScheduleChangeRequestActor} from './scheduleChangeRequestActor';
import {ScheduleChangeState} from './scheduleChangeState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ScheduleChangeRequest extends Partial<AdditionalDataHolder>, ChangeTrackedEntity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The assignedTo property */
    assignedTo?: ScheduleChangeRequestActor | undefined;
    /** The managerActionDateTime property */
    managerActionDateTime?: Date | undefined;
    /** The managerActionMessage property */
    managerActionMessage?: string | undefined;
    /** The managerUserId property */
    managerUserId?: string | undefined;
    /** The senderDateTime property */
    senderDateTime?: Date | undefined;
    /** The senderMessage property */
    senderMessage?: string | undefined;
    /** The senderUserId property */
    senderUserId?: string | undefined;
    /** The state property */
    state?: ScheduleChangeState | undefined;
}
