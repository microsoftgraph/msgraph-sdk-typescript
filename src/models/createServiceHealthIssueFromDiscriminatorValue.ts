import { deserializeIntoServiceHealthIssue } from './deserializeIntoServiceHealthIssue';
import { type ServiceHealthIssue } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceHealthIssueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHealthIssue;
}
