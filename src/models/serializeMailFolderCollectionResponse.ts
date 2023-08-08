import type {MailFolder} from './mailFolder';
import type {MailFolderCollectionResponse} from './mailFolderCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMailFolder} from './serializeMailFolder';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailFolderCollectionResponse(writer: SerializationWriter, mailFolderCollectionResponse: MailFolderCollectionResponse | undefined = {} as MailFolderCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mailFolderCollectionResponse)
        writer.writeCollectionOfObjectValues<MailFolder>("value", mailFolderCollectionResponse.value, serializeMailFolder);
}
