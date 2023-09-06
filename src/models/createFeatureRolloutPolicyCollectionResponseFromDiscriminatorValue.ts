import { deserializeIntoFeatureRolloutPolicyCollectionResponse } from './deserializeIntoFeatureRolloutPolicyCollectionResponse';
import { type FeatureRolloutPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFeatureRolloutPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFeatureRolloutPolicyCollectionResponse;
}
