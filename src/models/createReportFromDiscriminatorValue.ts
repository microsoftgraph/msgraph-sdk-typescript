import {ReportImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReportFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReportImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReportImpl();
}
