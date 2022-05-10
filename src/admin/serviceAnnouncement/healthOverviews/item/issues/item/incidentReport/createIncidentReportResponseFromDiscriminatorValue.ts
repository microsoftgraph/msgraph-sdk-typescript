import {IncidentReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncidentReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IncidentReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IncidentReportResponseImpl();
}
