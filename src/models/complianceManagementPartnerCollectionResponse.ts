import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ComplianceManagementPartner} from './complianceManagementPartner';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceManagementPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ComplianceManagementPartner[] | undefined;
}
