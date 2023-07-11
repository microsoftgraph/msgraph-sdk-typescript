import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {serializeTask} from './serializeTask';
import {Task} from './task';
import {TaskCollectionResponse} from './taskCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskCollectionResponse(taskCollectionResponse: TaskCollectionResponse | undefined = {} as TaskCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(taskCollectionResponse),
        "value": n => { taskCollectionResponse.value = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
    }
}
