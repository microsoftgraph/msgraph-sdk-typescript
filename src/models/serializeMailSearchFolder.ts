import {MailSearchFolder} from './mailSearchFolder';
import {serializeMailFolder} from './serializeMailFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailSearchFolder(mailSearchFolder: MailSearchFolder | undefined = {} as MailSearchFolder, writer: SerializationWriter) : void {
        serializeMailFolder(writer, mailSearchFolder)
        writer.writeStringValue("filterQuery", mailSearchFolder.filterQuery);
        writer.writeBooleanValue("includeNestedFolders", mailSearchFolder.includeNestedFolders);
        writer.writeBooleanValue("isSupported", mailSearchFolder.isSupported);
        writer.writeCollectionOfPrimitiveValues<string>("sourceFolderIds", mailSearchFolder.sourceFolderIds);
}
