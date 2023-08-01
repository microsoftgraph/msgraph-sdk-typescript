import {createMailFolderFromDiscriminatorValue} from './createMailFolderFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {MailFolder} from './mailFolder';
import type {MailFolderCollectionResponse} from './mailFolderCollectionResponse';
import {serializeMailFolder} from './serializeMailFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailFolderCollectionResponse(mailFolderCollectionResponse: MailFolderCollectionResponse | undefined = {} as MailFolderCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mailFolderCollectionResponse),
        "value": n => { mailFolderCollectionResponse.value = n.getCollectionOfObjectValues<MailFolder>(createMailFolderFromDiscriminatorValue); },
    }
}
