import {FeatureRolloutPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeatureRolloutPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeatureRolloutPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeatureRolloutPolicyCollectionResponseImpl();
}
