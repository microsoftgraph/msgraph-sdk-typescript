import { deserializeIntoDirectoryObject } from './deserializeIntoDirectoryObject';
import { type DirectoryObjectPartnerReference } from './directoryObjectPartnerReference';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoDirectoryObjectPartnerReference(directoryObjectPartnerReference: DirectoryObjectPartnerReference | undefined = {} as DirectoryObjectPartnerReference) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(directoryObjectPartnerReference),
        "description": n => { directoryObjectPartnerReference.description = n.getStringValue(); },
        "displayName": n => { directoryObjectPartnerReference.displayName = n.getStringValue(); },
        "externalPartnerTenantId": n => { directoryObjectPartnerReference.externalPartnerTenantId = n.getGuidValue(); },
        "objectType": n => { directoryObjectPartnerReference.objectType = n.getStringValue(); },
    }
}
