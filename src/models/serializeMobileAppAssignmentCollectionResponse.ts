import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppAssignmentCollectionResponse} from './mobileAppAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileAppAssignment} from './serializeMobileAppAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppAssignmentCollectionResponse(writer: SerializationWriter, mobileAppAssignmentCollectionResponse: MobileAppAssignmentCollectionResponse | undefined = {} as MobileAppAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<MobileAppAssignment>("value", mobileAppAssignmentCollectionResponse.value, serializeMobileAppAssignment);
}
