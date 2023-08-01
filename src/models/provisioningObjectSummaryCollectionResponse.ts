import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningObjectSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ProvisioningObjectSummary[] | undefined;
}
