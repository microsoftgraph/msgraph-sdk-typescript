import {MailFolder} from './mailFolder';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MailSearchFolder extends MailFolder, Parsable {
    /**
     * The OData query to filter the messages.
     */
    filterQuery?: string | undefined;
    /**
     * Indicates how the mailbox folder hierarchy should be traversed in the search. true means that a deep search should be done to include child folders in the hierarchy of each folder explicitly specified in sourceFolderIds. false means a shallow search of only each of the folders explicitly specified in sourceFolderIds.
     */
    includeNestedFolders?: boolean | undefined;
    /**
     * Indicates whether a search folder is editable using REST APIs.
     */
    isSupported?: boolean | undefined;
    /**
     * The mailbox folders that should be mined.
     */
    sourceFolderIds?: string[] | undefined;
}
