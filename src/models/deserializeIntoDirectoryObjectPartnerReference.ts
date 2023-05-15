import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryObjectPartnerReference} from './directoryObjectPartnerReference';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryObjectPartnerReference(directoryObjectPartnerReference: DirectoryObjectPartnerReference | undefined = {} as DirectoryObjectPartnerReference) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(directoryObjectPartnerReference),
        "description": n => { directoryObjectPartnerReference.description = n.getStringValue(); },
        "displayName": n => { directoryObjectPartnerReference.displayName = n.getStringValue(); },
        "externalPartnerTenantId": n => { directoryObjectPartnerReference.externalPartnerTenantId = n.getStringValue(); },
        "objectType": n => { directoryObjectPartnerReference.objectType = n.getStringValue(); },
    }
}
