import {createMobileAppAssignmentFromDiscriminatorValue} from './createMobileAppAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppAssignmentCollectionResponse} from './mobileAppAssignmentCollectionResponse';
import {serializeMobileAppAssignment} from './serializeMobileAppAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppAssignmentCollectionResponse(mobileAppAssignmentCollectionResponse: MobileAppAssignmentCollectionResponse | undefined = {} as MobileAppAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppAssignmentCollectionResponse),
        "value": n => { mobileAppAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<MobileAppAssignment>(createMobileAppAssignmentFromDiscriminatorValue); },
    }
}
