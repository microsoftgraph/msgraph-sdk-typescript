import {createDirectoryRoleFromDiscriminatorValue} from './createDirectoryRoleFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DirectoryRole} from './directoryRole';
import {DirectoryRoleCollectionResponse} from './directoryRoleCollectionResponse';
import {serializeDirectoryRole} from './serializeDirectoryRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryRoleCollectionResponse(directoryRoleCollectionResponse: DirectoryRoleCollectionResponse | undefined = {} as DirectoryRoleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryRoleCollectionResponse),
        "value": n => { directoryRoleCollectionResponse.value = n.getCollectionOfObjectValues<DirectoryRole>(createDirectoryRoleFromDiscriminatorValue); },
    }
}
