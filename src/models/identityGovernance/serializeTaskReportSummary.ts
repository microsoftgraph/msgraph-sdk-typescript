import {TaskReportSummary} from './taskReportSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskReportSummary(writer: SerializationWriter, taskReportSummary: TaskReportSummary | undefined = {} as TaskReportSummary) : void {
        writer.writeNumberValue("failedTasks", taskReportSummary.failedTasks);
        writer.writeStringValue("@odata.type", taskReportSummary.odataType);
        writer.writeNumberValue("successfulTasks", taskReportSummary.successfulTasks);
        writer.writeNumberValue("totalTasks", taskReportSummary.totalTasks);
        writer.writeNumberValue("unprocessedTasks", taskReportSummary.unprocessedTasks);
        writer.writeAdditionalData(taskReportSummary.additionalData);
}
