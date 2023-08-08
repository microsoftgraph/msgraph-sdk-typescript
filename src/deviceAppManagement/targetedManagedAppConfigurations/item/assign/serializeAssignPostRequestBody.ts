import {serializeTargetedManagedAppPolicyAssignment} from '../../../../models/serializeTargetedManagedAppPolicyAssignment';
import type {TargetedManagedAppPolicyAssignment} from '../../../../models/targetedManagedAppPolicyAssignment';
import type {AssignPostRequestBody} from './assignPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("assignments", assignPostRequestBody.assignments, serializeTargetedManagedAppPolicyAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
