import { createMobileAppAssignmentFromDiscriminatorValue } from './createMobileAppAssignmentFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type MobileAppAssignment } from './mobileAppAssignment';
import { type MobileAppAssignmentCollectionResponse } from './mobileAppAssignmentCollectionResponse';
import { serializeMobileAppAssignment } from './serializeMobileAppAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppAssignmentCollectionResponse(mobileAppAssignmentCollectionResponse: MobileAppAssignmentCollectionResponse | undefined = {} as MobileAppAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppAssignmentCollectionResponse),
        "value": n => { mobileAppAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<MobileAppAssignment>(createMobileAppAssignmentFromDiscriminatorValue); },
    }
}
