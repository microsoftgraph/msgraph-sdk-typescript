import {deserializeIntoReport} from './deserializeIntoReport';
import {Report} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReportFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReport;
}
