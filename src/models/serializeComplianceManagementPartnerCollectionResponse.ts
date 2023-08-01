import type {ComplianceManagementPartner} from './complianceManagementPartner';
import type {ComplianceManagementPartnerCollectionResponse} from './complianceManagementPartnerCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeComplianceManagementPartner} from './serializeComplianceManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceManagementPartnerCollectionResponse(writer: SerializationWriter, complianceManagementPartnerCollectionResponse: ComplianceManagementPartnerCollectionResponse | undefined = {} as ComplianceManagementPartnerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, complianceManagementPartnerCollectionResponse)
        writer.writeCollectionOfObjectValues<ComplianceManagementPartner>("value", complianceManagementPartnerCollectionResponse.value, serializeComplianceManagementPartner);
}
