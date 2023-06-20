import {ManagedEBookAssignment} from '../../../../models/managedEBookAssignment';
import {serializeManagedEBookAssignment} from '../../../../models/serializeManagedEBookAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<ManagedEBookAssignment>("managedEBookAssignments", assignPostRequestBody.managedEBookAssignments, serializeManagedEBookAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
