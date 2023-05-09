import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryRoleTemplate} from './directoryRoleTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryRoleTemplate(directoryRoleTemplate: DirectoryRoleTemplate | undefined = {} as DirectoryRoleTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(directoryRoleTemplate),
        "description": n => { directoryRoleTemplate.description = n.getStringValue(); },
        "displayName": n => { directoryRoleTemplate.displayName = n.getStringValue(); },
    }
}
