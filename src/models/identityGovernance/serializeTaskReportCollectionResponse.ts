import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeTaskReport} from './serializeTaskReport';
import type {TaskReport} from './taskReport';
import type {TaskReportCollectionResponse} from './taskReportCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskReportCollectionResponse(writer: SerializationWriter, taskReportCollectionResponse: TaskReportCollectionResponse | undefined = {} as TaskReportCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, taskReportCollectionResponse)
        writer.writeCollectionOfObjectValues<TaskReport>("value", taskReportCollectionResponse.value, serializeTaskReport);
}
