import {createFeatureRolloutPolicyFromDiscriminatorValue} from './createFeatureRolloutPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {FeatureRolloutPolicyCollectionResponse} from './featureRolloutPolicyCollectionResponse';
import {serializeFeatureRolloutPolicy} from './serializeFeatureRolloutPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFeatureRolloutPolicyCollectionResponse(featureRolloutPolicyCollectionResponse: FeatureRolloutPolicyCollectionResponse | undefined = {} as FeatureRolloutPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(featureRolloutPolicyCollectionResponse),
        "value": n => { featureRolloutPolicyCollectionResponse.value = n.getCollectionOfObjectValues<FeatureRolloutPolicy>(createFeatureRolloutPolicyFromDiscriminatorValue); },
    }
}
