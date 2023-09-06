import { createDirectoryAuditFromDiscriminatorValue } from './createDirectoryAuditFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DirectoryAudit } from './directoryAudit';
import { type DirectoryAuditCollectionResponse } from './directoryAuditCollectionResponse';
import { serializeDirectoryAudit } from './serializeDirectoryAudit';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryAuditCollectionResponse(directoryAuditCollectionResponse: DirectoryAuditCollectionResponse | undefined = {} as DirectoryAuditCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryAuditCollectionResponse),
        "value": n => { directoryAuditCollectionResponse.value = n.getCollectionOfObjectValues<DirectoryAudit>(createDirectoryAuditFromDiscriminatorValue); },
    }
}
