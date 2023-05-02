import {createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue} from './createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue';
import {CrossTenantAccessPolicyConfigurationPartner} from './crossTenantAccessPolicyConfigurationPartner';
import {CrossTenantAccessPolicyConfigurationPartnerCollectionResponse} from './crossTenantAccessPolicyConfigurationPartnerCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeCrossTenantAccessPolicyConfigurationPartner} from './serializeCrossTenantAccessPolicyConfigurationPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyConfigurationPartnerCollectionResponse(crossTenantAccessPolicyConfigurationPartnerCollectionResponse: CrossTenantAccessPolicyConfigurationPartnerCollectionResponse | undefined = {} as CrossTenantAccessPolicyConfigurationPartnerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(crossTenantAccessPolicyConfigurationPartnerCollectionResponse),
        "value": n => { crossTenantAccessPolicyConfigurationPartnerCollectionResponse.value = n.getCollectionOfObjectValues<CrossTenantAccessPolicyConfigurationPartner>(createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue); },
    }
}
