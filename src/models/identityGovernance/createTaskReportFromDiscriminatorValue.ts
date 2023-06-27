import {deserializeIntoTaskReport} from './deserializeIntoTaskReport';
import {TaskReport} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskReportFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskReport;
}
