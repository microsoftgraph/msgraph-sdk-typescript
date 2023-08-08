import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createTaskReportFromDiscriminatorValue} from './createTaskReportFromDiscriminatorValue';
import {serializeTaskReport} from './serializeTaskReport';
import type {TaskReport} from './taskReport';
import type {TaskReportCollectionResponse} from './taskReportCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskReportCollectionResponse(taskReportCollectionResponse: TaskReportCollectionResponse | undefined = {} as TaskReportCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(taskReportCollectionResponse),
        "value": n => { taskReportCollectionResponse.value = n.getCollectionOfObjectValues<TaskReport>(createTaskReportFromDiscriminatorValue); },
    }
}
