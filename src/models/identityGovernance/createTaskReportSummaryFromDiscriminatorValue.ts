import {deserializeIntoTaskReportSummary} from './deserializeIntoTaskReportSummary';
import {TaskReportSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskReportSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskReportSummary;
}
