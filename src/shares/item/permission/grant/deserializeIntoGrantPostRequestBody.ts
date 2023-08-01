import {createDriveRecipientFromDiscriminatorValue} from '../../../../models/createDriveRecipientFromDiscriminatorValue';
import type {DriveRecipient} from '../../../../models/driveRecipient';
import {serializeDriveRecipient} from '../../../../models/serializeDriveRecipient';
import type {GrantPostRequestBody} from './grantPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGrantPostRequestBody(grantPostRequestBody: GrantPostRequestBody | undefined = {} as GrantPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "recipients": n => { grantPostRequestBody.recipients = n.getCollectionOfObjectValues<DriveRecipient>(createDriveRecipientFromDiscriminatorValue); },
        "roles": n => { grantPostRequestBody.roles = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
