import { deserializeIntoReport } from './deserializeIntoReport';
import { type Report } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReportFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReport;
}
