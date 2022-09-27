import {PolicyBaseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PolicyBaseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PolicyBaseCollectionResponse();
}
