import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FeatureRolloutPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: FeatureRolloutPolicy[] | undefined;
}
