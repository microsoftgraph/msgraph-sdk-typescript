import {ConnectedOrganization} from './connectedOrganization';
import {ConnectedOrganizationState} from './connectedOrganizationState';
import {DirectoryObject} from './directoryObject';
import {IdentitySource} from './identitySource';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectedOrganization(writer: SerializationWriter, connectedOrganization: ConnectedOrganization | undefined = {} as ConnectedOrganization) : void {
        serializeEntity(writer, connectedOrganization)
        writer.writeDateValue("createdDateTime", connectedOrganization.createdDateTime);
        writer.writeStringValue("description", connectedOrganization.description);
        writer.writeStringValue("displayName", connectedOrganization.displayName);
        writer.writeCollectionOfObjectValues<DirectoryObject>("externalSponsors", connectedOrganization.externalSponsors, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<IdentitySource>("identitySources", connectedOrganization.identitySources, serializeIdentitySource);
        writer.writeCollectionOfObjectValues<DirectoryObject>("internalSponsors", connectedOrganization.internalSponsors, serializeDirectoryObject);
        writer.writeDateValue("modifiedDateTime", connectedOrganization.modifiedDateTime);
        writer.writeEnumValue<ConnectedOrganizationState>("state", connectedOrganization.state);
}
