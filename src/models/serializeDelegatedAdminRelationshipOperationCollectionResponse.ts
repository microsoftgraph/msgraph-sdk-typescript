import {DelegatedAdminRelationshipOperation} from './delegatedAdminRelationshipOperation';
import {DelegatedAdminRelationshipOperationCollectionResponse} from './delegatedAdminRelationshipOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminRelationshipOperation} from './serializeDelegatedAdminRelationshipOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipOperationCollectionResponse(delegatedAdminRelationshipOperationCollectionResponse: DelegatedAdminRelationshipOperationCollectionResponse | undefined = {} as DelegatedAdminRelationshipOperationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminRelationshipOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationshipOperation>("value", delegatedAdminRelationshipOperationCollectionResponse.value, serializeDelegatedAdminRelationshipOperation);
}
