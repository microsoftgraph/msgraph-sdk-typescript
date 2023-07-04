import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createTaskReportFromDiscriminatorValue} from './createTaskReportFromDiscriminatorValue';
import {serializeTaskReport} from './serializeTaskReport';
import {TaskReport} from './taskReport';
import {TaskReportCollectionResponse} from './taskReportCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskReportCollectionResponse(taskReportCollectionResponse: TaskReportCollectionResponse | undefined = {} as TaskReportCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(taskReportCollectionResponse),
        "value": n => { taskReportCollectionResponse.value = n.getCollectionOfObjectValues<TaskReport>(createTaskReportFromDiscriminatorValue); },
    }
}
