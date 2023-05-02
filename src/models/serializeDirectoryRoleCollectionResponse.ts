import {DirectoryRole} from './directoryRole';
import {DirectoryRoleCollectionResponse} from './directoryRoleCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryRole} from './serializeDirectoryRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryRoleCollectionResponse(writer: SerializationWriter, directoryRoleCollectionResponse: DirectoryRoleCollectionResponse | undefined = {} as DirectoryRoleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryRoleCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryRole>("value", directoryRoleCollectionResponse.value, serializeDirectoryRole);
}
