import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {FeatureRolloutPolicyCollectionResponse} from './featureRolloutPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFeatureRolloutPolicy} from './serializeFeatureRolloutPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFeatureRolloutPolicyCollectionResponse(writer: SerializationWriter, featureRolloutPolicyCollectionResponse: FeatureRolloutPolicyCollectionResponse | undefined = {} as FeatureRolloutPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, featureRolloutPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<FeatureRolloutPolicy>("value", featureRolloutPolicyCollectionResponse.value, serializeFeatureRolloutPolicy);
}
