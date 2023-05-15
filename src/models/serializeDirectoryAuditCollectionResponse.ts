import {DirectoryAudit} from './directoryAudit';
import {DirectoryAuditCollectionResponse} from './directoryAuditCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryAudit} from './serializeDirectoryAudit';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryAuditCollectionResponse(writer: SerializationWriter, directoryAuditCollectionResponse: DirectoryAuditCollectionResponse | undefined = {} as DirectoryAuditCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryAuditCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryAudit>("value", directoryAuditCollectionResponse.value, serializeDirectoryAudit);
}
