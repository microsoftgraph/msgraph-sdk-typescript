import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from '../../../../models/createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {serializeTargetedManagedAppPolicyAssignment} from '../../../../models/serializeTargetedManagedAppPolicyAssignment';
import type {TargetedManagedAppPolicyAssignment} from '../../../../models/targetedManagedAppPolicyAssignment';
import type {AssignPostRequestBody} from './assignPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "assignments": n => { assignPostRequestBody.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
    }
}
