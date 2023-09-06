import { deserializeIntoReportRoot } from './deserializeIntoReportRoot';
import { type ReportRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReportRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReportRoot;
}
