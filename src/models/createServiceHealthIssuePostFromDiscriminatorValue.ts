import {ServiceHealthIssuePostImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthIssuePostFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealthIssuePostImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealthIssuePostImpl();
}
