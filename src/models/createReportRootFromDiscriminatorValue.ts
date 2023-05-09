import {deserializeIntoReportRoot} from './deserializeIntoReportRoot';
import {ReportRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReportRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReportRoot;
}
