import {DirectoryRoleTemplate} from './directoryRoleTemplate';
import {DirectoryRoleTemplateCollectionResponse} from './directoryRoleTemplateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryRoleTemplate} from './serializeDirectoryRoleTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryRoleTemplateCollectionResponse(directoryRoleTemplateCollectionResponse: DirectoryRoleTemplateCollectionResponse | undefined = {} as DirectoryRoleTemplateCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryRoleTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryRoleTemplate>("value", directoryRoleTemplateCollectionResponse.value, serializeDirectoryRoleTemplate);
}
