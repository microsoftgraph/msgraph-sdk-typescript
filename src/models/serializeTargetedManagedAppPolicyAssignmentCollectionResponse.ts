import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import type {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import type {TargetedManagedAppPolicyAssignmentCollectionResponse} from './targetedManagedAppPolicyAssignmentCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppPolicyAssignmentCollectionResponse(writer: SerializationWriter, targetedManagedAppPolicyAssignmentCollectionResponse: TargetedManagedAppPolicyAssignmentCollectionResponse | undefined = {} as TargetedManagedAppPolicyAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, targetedManagedAppPolicyAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("value", targetedManagedAppPolicyAssignmentCollectionResponse.value, serializeTargetedManagedAppPolicyAssignment);
}
