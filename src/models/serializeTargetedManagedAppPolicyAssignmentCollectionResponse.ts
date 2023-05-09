import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {TargetedManagedAppPolicyAssignmentCollectionResponse} from './targetedManagedAppPolicyAssignmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppPolicyAssignmentCollectionResponse(writer: SerializationWriter, targetedManagedAppPolicyAssignmentCollectionResponse: TargetedManagedAppPolicyAssignmentCollectionResponse | undefined = {} as TargetedManagedAppPolicyAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, targetedManagedAppPolicyAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("value", targetedManagedAppPolicyAssignmentCollectionResponse.value, serializeTargetedManagedAppPolicyAssignment);
}
