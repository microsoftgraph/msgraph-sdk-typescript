import type {ComplianceManagementPartner} from './complianceManagementPartner';
import type {ComplianceManagementPartnerCollectionResponse} from './complianceManagementPartnerCollectionResponse';
import {createComplianceManagementPartnerFromDiscriminatorValue} from './createComplianceManagementPartnerFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeComplianceManagementPartner} from './serializeComplianceManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceManagementPartnerCollectionResponse(complianceManagementPartnerCollectionResponse: ComplianceManagementPartnerCollectionResponse | undefined = {} as ComplianceManagementPartnerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(complianceManagementPartnerCollectionResponse),
        "value": n => { complianceManagementPartnerCollectionResponse.value = n.getCollectionOfObjectValues<ComplianceManagementPartner>(createComplianceManagementPartnerFromDiscriminatorValue); },
    }
}
