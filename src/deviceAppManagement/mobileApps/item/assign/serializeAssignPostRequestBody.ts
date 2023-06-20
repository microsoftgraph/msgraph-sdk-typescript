import {MobileAppAssignment} from '../../../../models/mobileAppAssignment';
import {serializeMobileAppAssignment} from '../../../../models/serializeMobileAppAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<MobileAppAssignment>("mobileAppAssignments", assignPostRequestBody.mobileAppAssignments, serializeMobileAppAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
