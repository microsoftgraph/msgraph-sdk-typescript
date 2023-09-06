import { createManagedEBookAssignmentFromDiscriminatorValue } from '../../../../models/createManagedEBookAssignmentFromDiscriminatorValue';
import { type ManagedEBookAssignment } from '../../../../models/managedEBookAssignment';
import { serializeManagedEBookAssignment } from '../../../../models/serializeManagedEBookAssignment';
import { type AssignPostRequestBody } from './assignPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "managedEBookAssignments": n => { assignPostRequestBody.managedEBookAssignments = n.getCollectionOfObjectValues<ManagedEBookAssignment>(createManagedEBookAssignmentFromDiscriminatorValue); },
    }
}
