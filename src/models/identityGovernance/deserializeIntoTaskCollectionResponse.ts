import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createTaskFromDiscriminatorValue } from './createTaskFromDiscriminatorValue';
import { serializeTask } from './serializeTask';
import { type Task } from './task';
import { type TaskCollectionResponse } from './taskCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskCollectionResponse(taskCollectionResponse: TaskCollectionResponse | undefined = {} as TaskCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(taskCollectionResponse),
        "value": n => { taskCollectionResponse.value = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
    }
}
