import {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import {DelegatedAdminRelationshipRequestCollectionResponse} from './delegatedAdminRelationshipRequestCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminRelationshipRequest} from './serializeDelegatedAdminRelationshipRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipRequestCollectionResponse(writer: SerializationWriter, delegatedAdminRelationshipRequestCollectionResponse: DelegatedAdminRelationshipRequestCollectionResponse | undefined = {} as DelegatedAdminRelationshipRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminRelationshipRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationshipRequest>("value", delegatedAdminRelationshipRequestCollectionResponse.value, serializeDelegatedAdminRelationshipRequest);
}
