import { deserializeIntoServiceHealthIssuePost } from './deserializeIntoServiceHealthIssuePost';
import { type ServiceHealthIssuePost } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceHealthIssuePostFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHealthIssuePost;
}
