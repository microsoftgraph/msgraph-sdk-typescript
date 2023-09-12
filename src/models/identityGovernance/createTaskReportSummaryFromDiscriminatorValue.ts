import { deserializeIntoTaskReportSummary } from './deserializeIntoTaskReportSummary';
import { type TaskReportSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTaskReportSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskReportSummary;
}
