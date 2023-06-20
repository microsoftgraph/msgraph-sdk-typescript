import {DirectoryAudit} from './directoryAudit';
import {DirectoryAuditCollectionResponse} from './directoryAuditCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryAudit} from './serializeDirectoryAudit';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryAuditCollectionResponse(directoryAuditCollectionResponse: DirectoryAuditCollectionResponse | undefined = {} as DirectoryAuditCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryAuditCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryAudit>("value", directoryAuditCollectionResponse.value, serializeDirectoryAudit);
}
