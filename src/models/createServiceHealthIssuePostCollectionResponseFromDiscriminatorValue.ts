import {ServiceHealthIssuePostCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthIssuePostCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealthIssuePostCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealthIssuePostCollectionResponse();
}
