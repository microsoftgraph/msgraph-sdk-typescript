import {TaskReportSummary} from './taskReportSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskReportSummary(taskReportSummary: TaskReportSummary | undefined = {} as TaskReportSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "failedTasks": n => { taskReportSummary.failedTasks = n.getNumberValue(); },
        "@odata.type": n => { taskReportSummary.odataType = n.getStringValue(); },
        "successfulTasks": n => { taskReportSummary.successfulTasks = n.getNumberValue(); },
        "totalTasks": n => { taskReportSummary.totalTasks = n.getNumberValue(); },
        "unprocessedTasks": n => { taskReportSummary.unprocessedTasks = n.getNumberValue(); },
    }
}
