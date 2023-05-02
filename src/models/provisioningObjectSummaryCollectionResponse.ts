import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningObjectSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ProvisioningObjectSummary[] | undefined;
}
