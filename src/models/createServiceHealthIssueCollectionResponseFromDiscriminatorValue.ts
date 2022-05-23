import {ServiceHealthIssueCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthIssueCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealthIssueCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealthIssueCollectionResponseImpl();
}
