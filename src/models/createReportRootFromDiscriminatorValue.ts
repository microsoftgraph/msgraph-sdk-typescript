import {ReportRootImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReportRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReportRootImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReportRootImpl();
}
