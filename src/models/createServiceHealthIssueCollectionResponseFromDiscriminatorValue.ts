import {deserializeIntoServiceHealthIssueCollectionResponse} from './deserializeIntoServiceHealthIssueCollectionResponse';
import {ServiceHealthIssueCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthIssueCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHealthIssueCollectionResponse;
}
