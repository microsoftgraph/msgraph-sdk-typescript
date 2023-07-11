import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ClaimsMappingPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ClaimsMappingPolicy[] | undefined;
}
