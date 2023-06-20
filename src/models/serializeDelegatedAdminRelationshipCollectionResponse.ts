import {DelegatedAdminRelationship} from './delegatedAdminRelationship';
import {DelegatedAdminRelationshipCollectionResponse} from './delegatedAdminRelationshipCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminRelationship} from './serializeDelegatedAdminRelationship';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipCollectionResponse(delegatedAdminRelationshipCollectionResponse: DelegatedAdminRelationshipCollectionResponse | undefined = {} as DelegatedAdminRelationshipCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminRelationshipCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationship>("value", delegatedAdminRelationshipCollectionResponse.value, serializeDelegatedAdminRelationship);
}
