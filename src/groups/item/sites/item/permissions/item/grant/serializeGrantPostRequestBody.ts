import {DriveRecipient} from '../../../../../../../models/driveRecipient';
import {serializeDriveRecipient} from '../../../../../../../models/serializeDriveRecipient';
import {GrantPostRequestBody} from './grantPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGrantPostRequestBody(grantPostRequestBody: GrantPostRequestBody | undefined = {} as GrantPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<DriveRecipient>("recipients", grantPostRequestBody.recipients, serializeDriveRecipient);
        writer.writeCollectionOfPrimitiveValues<string>("roles", grantPostRequestBody.roles);
        writer.writeAdditionalData(grantPostRequestBody.additionalData);
}
