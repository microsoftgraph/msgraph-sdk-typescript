import {deserializeIntoMailFolder} from './deserializeIntoMailFolder';
import {MailSearchFolder} from './mailSearchFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailSearchFolder(mailSearchFolder: MailSearchFolder | undefined = {} as MailSearchFolder) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMailFolder(mailSearchFolder),
        "filterQuery": n => { mailSearchFolder.filterQuery = n.getStringValue(); },
        "includeNestedFolders": n => { mailSearchFolder.includeNestedFolders = n.getBooleanValue(); },
        "isSupported": n => { mailSearchFolder.isSupported = n.getBooleanValue(); },
        "sourceFolderIds": n => { mailSearchFolder.sourceFolderIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
