import {ManagedEBookAssignment} from './managedEBookAssignment';
import {ManagedEBookAssignmentCollectionResponse} from './managedEBookAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedEBookAssignmentCollectionResponse(managedEBookAssignmentCollectionResponse: ManagedEBookAssignmentCollectionResponse | undefined = {} as ManagedEBookAssignmentCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedEBookAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedEBookAssignment>("value", managedEBookAssignmentCollectionResponse.value, serializeManagedEBookAssignment);
}
