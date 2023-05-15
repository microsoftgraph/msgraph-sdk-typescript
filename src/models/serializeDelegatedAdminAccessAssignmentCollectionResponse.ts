import {DelegatedAdminAccessAssignment} from './delegatedAdminAccessAssignment';
import {DelegatedAdminAccessAssignmentCollectionResponse} from './delegatedAdminAccessAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminAccessAssignment} from './serializeDelegatedAdminAccessAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminAccessAssignmentCollectionResponse(writer: SerializationWriter, delegatedAdminAccessAssignmentCollectionResponse: DelegatedAdminAccessAssignmentCollectionResponse | undefined = {} as DelegatedAdminAccessAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, delegatedAdminAccessAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<DelegatedAdminAccessAssignment>("value", delegatedAdminAccessAssignmentCollectionResponse.value, serializeDelegatedAdminAccessAssignment);
}
