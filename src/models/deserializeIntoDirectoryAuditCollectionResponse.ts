import {createDirectoryAuditFromDiscriminatorValue} from './createDirectoryAuditFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DirectoryAudit} from './directoryAudit';
import {DirectoryAuditCollectionResponse} from './directoryAuditCollectionResponse';
import {serializeDirectoryAudit} from './serializeDirectoryAudit';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryAuditCollectionResponse(directoryAuditCollectionResponse: DirectoryAuditCollectionResponse | undefined = {} as DirectoryAuditCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryAuditCollectionResponse),
        "value": n => { directoryAuditCollectionResponse.value = n.getCollectionOfObjectValues<DirectoryAudit>(createDirectoryAuditFromDiscriminatorValue); },
    }
}
