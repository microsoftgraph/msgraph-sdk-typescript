import {deserializeIntoFeatureRolloutPolicyCollectionResponse} from './deserializeIntoFeatureRolloutPolicyCollectionResponse';
import {FeatureRolloutPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeatureRolloutPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFeatureRolloutPolicyCollectionResponse;
}
