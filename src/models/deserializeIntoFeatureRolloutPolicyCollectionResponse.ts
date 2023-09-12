import { createFeatureRolloutPolicyFromDiscriminatorValue } from './createFeatureRolloutPolicyFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type FeatureRolloutPolicy } from './featureRolloutPolicy';
import { type FeatureRolloutPolicyCollectionResponse } from './featureRolloutPolicyCollectionResponse';
import { serializeFeatureRolloutPolicy } from './serializeFeatureRolloutPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFeatureRolloutPolicyCollectionResponse(featureRolloutPolicyCollectionResponse: FeatureRolloutPolicyCollectionResponse | undefined = {} as FeatureRolloutPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(featureRolloutPolicyCollectionResponse),
        "value": n => { featureRolloutPolicyCollectionResponse.value = n.getCollectionOfObjectValues<FeatureRolloutPolicy>(createFeatureRolloutPolicyFromDiscriminatorValue); },
    }
}
