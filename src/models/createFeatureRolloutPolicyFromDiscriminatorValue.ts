import { deserializeIntoFeatureRolloutPolicy } from './deserializeIntoFeatureRolloutPolicy';
import { type FeatureRolloutPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFeatureRolloutPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFeatureRolloutPolicy;
}
