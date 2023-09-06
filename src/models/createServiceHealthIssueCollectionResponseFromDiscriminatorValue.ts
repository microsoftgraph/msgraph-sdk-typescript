import { deserializeIntoServiceHealthIssueCollectionResponse } from './deserializeIntoServiceHealthIssueCollectionResponse';
import { type ServiceHealthIssueCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceHealthIssueCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHealthIssueCollectionResponse;
}
