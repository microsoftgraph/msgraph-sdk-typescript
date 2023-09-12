import { type DirectoryRole } from './directoryRole';
import { type DirectoryRoleCollectionResponse } from './directoryRoleCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDirectoryRole } from './serializeDirectoryRole';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDirectoryRoleCollectionResponse(writer: SerializationWriter, directoryRoleCollectionResponse: DirectoryRoleCollectionResponse | undefined = {} as DirectoryRoleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryRoleCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryRole>("value", directoryRoleCollectionResponse.value, serializeDirectoryRole);
}
