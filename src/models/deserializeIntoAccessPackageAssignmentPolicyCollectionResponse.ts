import { type AccessPackageAssignmentPolicy } from './accessPackageAssignmentPolicy';
import { type AccessPackageAssignmentPolicyCollectionResponse } from './accessPackageAssignmentPolicyCollectionResponse';
import { createAccessPackageAssignmentPolicyFromDiscriminatorValue } from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAccessPackageAssignmentPolicy } from './serializeAccessPackageAssignmentPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentPolicyCollectionResponse(accessPackageAssignmentPolicyCollectionResponse: AccessPackageAssignmentPolicyCollectionResponse | undefined = {} as AccessPackageAssignmentPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageAssignmentPolicyCollectionResponse),
        "value": n => { accessPackageAssignmentPolicyCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicy>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
    }
}
