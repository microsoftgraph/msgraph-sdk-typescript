import {deserializeIntoServiceHealthIssue} from './deserializeIntoServiceHealthIssue';
import {ServiceHealthIssue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthIssueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHealthIssue;
}
