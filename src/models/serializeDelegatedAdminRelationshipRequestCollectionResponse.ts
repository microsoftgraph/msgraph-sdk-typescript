import type {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import type {DelegatedAdminRelationshipRequestCollectionResponse} from './delegatedAdminRelationshipRequestCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminRelationshipRequest} from './serializeDelegatedAdminRelationshipRequest';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipRequestCollectionResponse(writer: SerializationWriter, delegatedAdminRelationshipRequestCollectionResponse: DelegatedAdminRelationshipRequestCollectionResponse | undefined = {} as DelegatedAdminRelationshipRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminRelationshipRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationshipRequest>("value", delegatedAdminRelationshipRequestCollectionResponse.value, serializeDelegatedAdminRelationshipRequest);
}
