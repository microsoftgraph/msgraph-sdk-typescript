import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ComplianceManagementPartner} from './complianceManagementPartner';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceManagementPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ComplianceManagementPartner[] | undefined;
}
