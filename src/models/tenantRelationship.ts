import { type DelegatedAdminCustomer } from './delegatedAdminCustomer';
import { type DelegatedAdminRelationship } from './delegatedAdminRelationship';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface TenantRelationship extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The customer who has a delegated admin relationship with a Microsoft partner.
     */
    delegatedAdminCustomers?: DelegatedAdminCustomer[] | undefined;
    /**
     * The details of the delegated administrative privileges that a Microsoft partner has in a customer tenant.
     */
    delegatedAdminRelationships?: DelegatedAdminRelationship[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
