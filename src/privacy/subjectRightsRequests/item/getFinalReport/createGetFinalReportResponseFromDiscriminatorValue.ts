import {GetFinalReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetFinalReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetFinalReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetFinalReportResponseImpl();
}
