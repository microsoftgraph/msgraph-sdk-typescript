import type {DelegatedAdminCustomer} from './delegatedAdminCustomer';
import type {DelegatedAdminRelationship} from './delegatedAdminRelationship';
import {serializeDelegatedAdminCustomer} from './serializeDelegatedAdminCustomer';
import {serializeDelegatedAdminRelationship} from './serializeDelegatedAdminRelationship';
import type {TenantRelationship} from './tenantRelationship';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTenantRelationship(writer: SerializationWriter, tenantRelationship: TenantRelationship | undefined = {} as TenantRelationship) : void {
        writer.writeCollectionOfObjectValues<DelegatedAdminCustomer>("delegatedAdminCustomers", tenantRelationship.delegatedAdminCustomers, serializeDelegatedAdminCustomer);
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationship>("delegatedAdminRelationships", tenantRelationship.delegatedAdminRelationships, serializeDelegatedAdminRelationship);
        writer.writeStringValue("@odata.type", tenantRelationship.odataType);
        writer.writeAdditionalData(tenantRelationship.additionalData);
}
