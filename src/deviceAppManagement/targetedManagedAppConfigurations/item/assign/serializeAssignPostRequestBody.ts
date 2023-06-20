import {serializeTargetedManagedAppPolicyAssignment} from '../../../../models/serializeTargetedManagedAppPolicyAssignment';
import {TargetedManagedAppPolicyAssignment} from '../../../../models/targetedManagedAppPolicyAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("assignments", assignPostRequestBody.assignments, serializeTargetedManagedAppPolicyAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
