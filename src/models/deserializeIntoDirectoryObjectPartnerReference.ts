import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryObjectPartnerReference} from './directoryObjectPartnerReference';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoDirectoryObjectPartnerReference(directoryObjectPartnerReference: DirectoryObjectPartnerReference | undefined = {} as DirectoryObjectPartnerReference) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(directoryObjectPartnerReference),
        "description": n => { directoryObjectPartnerReference.description = n.getStringValue(); },
        "displayName": n => { directoryObjectPartnerReference.displayName = n.getStringValue(); },
        "externalPartnerTenantId": n => { directoryObjectPartnerReference.externalPartnerTenantId = n.getGuidValue(); },
        "objectType": n => { directoryObjectPartnerReference.objectType = n.getStringValue(); },
    }
}
