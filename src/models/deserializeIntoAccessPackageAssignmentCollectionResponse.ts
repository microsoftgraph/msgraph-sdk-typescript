import { type AccessPackageAssignment } from './accessPackageAssignment';
import { type AccessPackageAssignmentCollectionResponse } from './accessPackageAssignmentCollectionResponse';
import { createAccessPackageAssignmentFromDiscriminatorValue } from './createAccessPackageAssignmentFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAccessPackageAssignment } from './serializeAccessPackageAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentCollectionResponse(accessPackageAssignmentCollectionResponse: AccessPackageAssignmentCollectionResponse | undefined = {} as AccessPackageAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageAssignmentCollectionResponse),
        "value": n => { accessPackageAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageAssignment>(createAccessPackageAssignmentFromDiscriminatorValue); },
    }
}
