import {createDirectoryRoleFromDiscriminatorValue} from './createDirectoryRoleFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DirectoryRole} from './directoryRole';
import type {DirectoryRoleCollectionResponse} from './directoryRoleCollectionResponse';
import {serializeDirectoryRole} from './serializeDirectoryRole';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryRoleCollectionResponse(directoryRoleCollectionResponse: DirectoryRoleCollectionResponse | undefined = {} as DirectoryRoleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryRoleCollectionResponse),
        "value": n => { directoryRoleCollectionResponse.value = n.getCollectionOfObjectValues<DirectoryRole>(createDirectoryRoleFromDiscriminatorValue); },
    }
}
