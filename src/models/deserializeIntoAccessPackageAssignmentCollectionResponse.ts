import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentCollectionResponse} from './accessPackageAssignmentCollectionResponse';
import {createAccessPackageAssignmentFromDiscriminatorValue} from './createAccessPackageAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentCollectionResponse(accessPackageAssignmentCollectionResponse: AccessPackageAssignmentCollectionResponse | undefined = {} as AccessPackageAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageAssignmentCollectionResponse),
        "value": n => { accessPackageAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageAssignment>(createAccessPackageAssignmentFromDiscriminatorValue); },
    }
}
