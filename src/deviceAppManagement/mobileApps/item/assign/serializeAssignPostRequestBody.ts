import { type MobileAppAssignment } from '../../../../models/mobileAppAssignment';
import { serializeMobileAppAssignment } from '../../../../models/serializeMobileAppAssignment';
import { type AssignPostRequestBody } from './assignPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<MobileAppAssignment>("mobileAppAssignments", assignPostRequestBody.mobileAppAssignments, serializeMobileAppAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
