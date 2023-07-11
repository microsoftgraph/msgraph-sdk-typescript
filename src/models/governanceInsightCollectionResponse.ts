import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {GovernanceInsight} from './governanceInsight';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GovernanceInsightCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: GovernanceInsight[] | undefined;
}
