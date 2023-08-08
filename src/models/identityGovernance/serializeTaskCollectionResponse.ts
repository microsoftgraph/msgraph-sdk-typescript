import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeTask} from './serializeTask';
import type {Task} from './task';
import type {TaskCollectionResponse} from './taskCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskCollectionResponse(writer: SerializationWriter, taskCollectionResponse: TaskCollectionResponse | undefined = {} as TaskCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, taskCollectionResponse)
        writer.writeCollectionOfObjectValues<Task>("value", taskCollectionResponse.value, serializeTask);
}
