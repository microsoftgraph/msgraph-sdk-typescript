import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerProgressTaskBoardTaskFormat extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here. */
    orderHint?: string | undefined;
}
