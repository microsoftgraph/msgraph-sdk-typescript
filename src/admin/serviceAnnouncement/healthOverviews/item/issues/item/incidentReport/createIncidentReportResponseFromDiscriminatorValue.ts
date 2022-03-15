import {IncidentReportResponse} from './incidentReportResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncidentReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IncidentReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IncidentReportResponse();
}
