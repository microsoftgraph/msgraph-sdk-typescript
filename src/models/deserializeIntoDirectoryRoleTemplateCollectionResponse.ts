import {createDirectoryRoleTemplateFromDiscriminatorValue} from './createDirectoryRoleTemplateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DirectoryRoleTemplate} from './directoryRoleTemplate';
import {DirectoryRoleTemplateCollectionResponse} from './directoryRoleTemplateCollectionResponse';
import {serializeDirectoryRoleTemplate} from './serializeDirectoryRoleTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryRoleTemplateCollectionResponse(directoryRoleTemplateCollectionResponse: DirectoryRoleTemplateCollectionResponse | undefined = {} as DirectoryRoleTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryRoleTemplateCollectionResponse),
        "value": n => { directoryRoleTemplateCollectionResponse.value = n.getCollectionOfObjectValues<DirectoryRoleTemplate>(createDirectoryRoleTemplateFromDiscriminatorValue); },
    }
}
