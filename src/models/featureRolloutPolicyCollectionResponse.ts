import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type FeatureRolloutPolicy } from './featureRolloutPolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface FeatureRolloutPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: FeatureRolloutPolicy[] | undefined;
}
