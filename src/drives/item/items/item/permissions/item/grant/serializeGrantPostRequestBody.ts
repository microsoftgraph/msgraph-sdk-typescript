import { type DriveRecipient } from '../../../../../../../models/driveRecipient';
import { serializeDriveRecipient } from '../../../../../../../models/serializeDriveRecipient';
import { type GrantPostRequestBody } from './grantPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGrantPostRequestBody(writer: SerializationWriter, grantPostRequestBody: GrantPostRequestBody | undefined = {} as GrantPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<DriveRecipient>("recipients", grantPostRequestBody.recipients, serializeDriveRecipient);
        writer.writeCollectionOfPrimitiveValues<string>("roles", grantPostRequestBody.roles);
        writer.writeAdditionalData(grantPostRequestBody.additionalData);
}
