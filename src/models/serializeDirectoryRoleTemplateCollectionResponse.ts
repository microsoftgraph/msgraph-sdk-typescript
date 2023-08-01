import type {DirectoryRoleTemplate} from './directoryRoleTemplate';
import type {DirectoryRoleTemplateCollectionResponse} from './directoryRoleTemplateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryRoleTemplate} from './serializeDirectoryRoleTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryRoleTemplateCollectionResponse(writer: SerializationWriter, directoryRoleTemplateCollectionResponse: DirectoryRoleTemplateCollectionResponse | undefined = {} as DirectoryRoleTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryRoleTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryRoleTemplate>("value", directoryRoleTemplateCollectionResponse.value, serializeDirectoryRoleTemplate);
}
