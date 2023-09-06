import { type DirectoryRoleTemplate } from './directoryRoleTemplate';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDirectoryRoleTemplate(writer: SerializationWriter, directoryRoleTemplate: DirectoryRoleTemplate | undefined = {} as DirectoryRoleTemplate) : void {
        serializeDirectoryObject(writer, directoryRoleTemplate)
        writer.writeStringValue("description", directoryRoleTemplate.description);
        writer.writeStringValue("displayName", directoryRoleTemplate.displayName);
}
