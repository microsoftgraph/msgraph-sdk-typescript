import {createDelegatedAdminCustomerFromDiscriminatorValue} from './createDelegatedAdminCustomerFromDiscriminatorValue';
import {createDelegatedAdminRelationshipFromDiscriminatorValue} from './createDelegatedAdminRelationshipFromDiscriminatorValue';
import type {DelegatedAdminCustomer} from './delegatedAdminCustomer';
import type {DelegatedAdminRelationship} from './delegatedAdminRelationship';
import {serializeDelegatedAdminCustomer} from './serializeDelegatedAdminCustomer';
import {serializeDelegatedAdminRelationship} from './serializeDelegatedAdminRelationship';
import type {TenantRelationship} from './tenantRelationship';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTenantRelationship(tenantRelationship: TenantRelationship | undefined = {} as TenantRelationship) : Record<string, (node: ParseNode) => void> {
    return {
        "delegatedAdminCustomers": n => { tenantRelationship.delegatedAdminCustomers = n.getCollectionOfObjectValues<DelegatedAdminCustomer>(createDelegatedAdminCustomerFromDiscriminatorValue); },
        "delegatedAdminRelationships": n => { tenantRelationship.delegatedAdminRelationships = n.getCollectionOfObjectValues<DelegatedAdminRelationship>(createDelegatedAdminRelationshipFromDiscriminatorValue); },
        "@odata.type": n => { tenantRelationship.odataType = n.getStringValue(); },
    }
}
