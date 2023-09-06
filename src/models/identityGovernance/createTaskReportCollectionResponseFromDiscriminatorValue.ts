import { deserializeIntoTaskReportCollectionResponse } from './deserializeIntoTaskReportCollectionResponse';
import { type TaskReportCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTaskReportCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskReportCollectionResponse;
}
