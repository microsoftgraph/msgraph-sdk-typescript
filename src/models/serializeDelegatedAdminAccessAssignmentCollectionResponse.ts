import type {DelegatedAdminAccessAssignment} from './delegatedAdminAccessAssignment';
import type {DelegatedAdminAccessAssignmentCollectionResponse} from './delegatedAdminAccessAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminAccessAssignment} from './serializeDelegatedAdminAccessAssignment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminAccessAssignmentCollectionResponse(writer: SerializationWriter, delegatedAdminAccessAssignmentCollectionResponse: DelegatedAdminAccessAssignmentCollectionResponse | undefined = {} as DelegatedAdminAccessAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminAccessAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminAccessAssignment>("value", delegatedAdminAccessAssignmentCollectionResponse.value, serializeDelegatedAdminAccessAssignment);
}
