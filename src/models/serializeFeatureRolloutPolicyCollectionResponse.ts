import { type FeatureRolloutPolicy } from './featureRolloutPolicy';
import { type FeatureRolloutPolicyCollectionResponse } from './featureRolloutPolicyCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeFeatureRolloutPolicy } from './serializeFeatureRolloutPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFeatureRolloutPolicyCollectionResponse(writer: SerializationWriter, featureRolloutPolicyCollectionResponse: FeatureRolloutPolicyCollectionResponse | undefined = {} as FeatureRolloutPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, featureRolloutPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<FeatureRolloutPolicy>("value", featureRolloutPolicyCollectionResponse.value, serializeFeatureRolloutPolicy);
}
