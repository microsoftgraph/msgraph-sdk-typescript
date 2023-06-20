import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {FeatureRolloutPolicyCollectionResponse} from './featureRolloutPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFeatureRolloutPolicy} from './serializeFeatureRolloutPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFeatureRolloutPolicyCollectionResponse(featureRolloutPolicyCollectionResponse: FeatureRolloutPolicyCollectionResponse | undefined = {} as FeatureRolloutPolicyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, featureRolloutPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<FeatureRolloutPolicy>("value", featureRolloutPolicyCollectionResponse.value, serializeFeatureRolloutPolicy);
}
