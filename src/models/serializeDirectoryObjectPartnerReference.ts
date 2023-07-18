import {DirectoryObjectPartnerReference} from './directoryObjectPartnerReference';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeDirectoryObjectPartnerReference(writer: SerializationWriter, directoryObjectPartnerReference: DirectoryObjectPartnerReference | undefined = {} as DirectoryObjectPartnerReference) : void {
        serializeDirectoryObject(writer, directoryObjectPartnerReference)
        writer.writeStringValue("description", directoryObjectPartnerReference.description);
        writer.writeStringValue("displayName", directoryObjectPartnerReference.displayName);
        writer.writeGuidValue("externalPartnerTenantId", directoryObjectPartnerReference.externalPartnerTenantId);
        writer.writeStringValue("objectType", directoryObjectPartnerReference.objectType);
}
