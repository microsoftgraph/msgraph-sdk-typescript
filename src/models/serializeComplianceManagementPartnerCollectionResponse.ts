import {ComplianceManagementPartner} from './complianceManagementPartner';
import {ComplianceManagementPartnerCollectionResponse} from './complianceManagementPartnerCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeComplianceManagementPartner} from './serializeComplianceManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceManagementPartnerCollectionResponse(complianceManagementPartnerCollectionResponse: ComplianceManagementPartnerCollectionResponse | undefined = {} as ComplianceManagementPartnerCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, complianceManagementPartnerCollectionResponse)
        writer.writeCollectionOfObjectValues<ComplianceManagementPartner>("value", complianceManagementPartnerCollectionResponse.value, serializeComplianceManagementPartner);
}
