import {Entity} from './entity';
import {TodoTaskList} from './todoTaskList';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Todo extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The task lists in the users mailbox. */
    lists?: TodoTaskList[] | undefined;
}
