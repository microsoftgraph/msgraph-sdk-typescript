import { type DelegatedAdminRelationship } from './delegatedAdminRelationship';
import { type DelegatedAdminRelationshipCollectionResponse } from './delegatedAdminRelationshipCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDelegatedAdminRelationship } from './serializeDelegatedAdminRelationship';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipCollectionResponse(writer: SerializationWriter, delegatedAdminRelationshipCollectionResponse: DelegatedAdminRelationshipCollectionResponse | undefined = {} as DelegatedAdminRelationshipCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminRelationshipCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationship>("value", delegatedAdminRelationshipCollectionResponse.value, serializeDelegatedAdminRelationship);
}
