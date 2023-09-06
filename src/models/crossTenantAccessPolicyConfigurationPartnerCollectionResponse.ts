import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type CrossTenantAccessPolicyConfigurationPartner } from './crossTenantAccessPolicyConfigurationPartner';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyConfigurationPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CrossTenantAccessPolicyConfigurationPartner[] | undefined;
}
