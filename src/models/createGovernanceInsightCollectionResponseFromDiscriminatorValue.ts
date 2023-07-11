import {deserializeIntoGovernanceInsightCollectionResponse} from './deserializeIntoGovernanceInsightCollectionResponse';
import {GovernanceInsightCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGovernanceInsightCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGovernanceInsightCollectionResponse;
}
