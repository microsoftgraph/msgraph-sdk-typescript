import type {ManagedEBookAssignment} from './managedEBookAssignment';
import type {ManagedEBookAssignmentCollectionResponse} from './managedEBookAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedEBookAssignmentCollectionResponse(writer: SerializationWriter, managedEBookAssignmentCollectionResponse: ManagedEBookAssignmentCollectionResponse | undefined = {} as ManagedEBookAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedEBookAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedEBookAssignment>("value", managedEBookAssignmentCollectionResponse.value, serializeManagedEBookAssignment);
}
