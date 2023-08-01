import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import type {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import type {TargetedManagedAppPolicyAssignmentCollectionResponse} from './targetedManagedAppPolicyAssignmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppPolicyAssignmentCollectionResponse(targetedManagedAppPolicyAssignmentCollectionResponse: TargetedManagedAppPolicyAssignmentCollectionResponse | undefined = {} as TargetedManagedAppPolicyAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(targetedManagedAppPolicyAssignmentCollectionResponse),
        "value": n => { targetedManagedAppPolicyAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
    }
}
