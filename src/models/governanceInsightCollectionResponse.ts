import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type GovernanceInsight } from './governanceInsight';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GovernanceInsightCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: GovernanceInsight[] | undefined;
}
