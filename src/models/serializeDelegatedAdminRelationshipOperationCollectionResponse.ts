import { type DelegatedAdminRelationshipOperation } from './delegatedAdminRelationshipOperation';
import { type DelegatedAdminRelationshipOperationCollectionResponse } from './delegatedAdminRelationshipOperationCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDelegatedAdminRelationshipOperation } from './serializeDelegatedAdminRelationshipOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipOperationCollectionResponse(writer: SerializationWriter, delegatedAdminRelationshipOperationCollectionResponse: DelegatedAdminRelationshipOperationCollectionResponse | undefined = {} as DelegatedAdminRelationshipOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminRelationshipOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationshipOperation>("value", delegatedAdminRelationshipOperationCollectionResponse.value, serializeDelegatedAdminRelationshipOperation);
}
