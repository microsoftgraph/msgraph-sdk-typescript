import {createManagedEBookAssignmentFromDiscriminatorValue} from './createManagedEBookAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {ManagedEBookAssignment} from './managedEBookAssignment';
import type {ManagedEBookAssignmentCollectionResponse} from './managedEBookAssignmentCollectionResponse';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedEBookAssignmentCollectionResponse(managedEBookAssignmentCollectionResponse: ManagedEBookAssignmentCollectionResponse | undefined = {} as ManagedEBookAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedEBookAssignmentCollectionResponse),
        "value": n => { managedEBookAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<ManagedEBookAssignment>(createManagedEBookAssignmentFromDiscriminatorValue); },
    }
}
