import { type ManagedEBookAssignment } from '../../../../models/managedEBookAssignment';
import { serializeManagedEBookAssignment } from '../../../../models/serializeManagedEBookAssignment';
import { type AssignPostRequestBody } from './assignPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<ManagedEBookAssignment>("managedEBookAssignments", assignPostRequestBody.managedEBookAssignments, serializeManagedEBookAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
