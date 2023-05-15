import {ConnectedOrganization} from './connectedOrganization';
import {ConnectedOrganizationState} from './connectedOrganizationState';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createIdentitySourceFromDiscriminatorValue} from './createIdentitySourceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DirectoryObject} from './directoryObject';
import {IdentitySource} from './identitySource';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectedOrganization(connectedOrganization: ConnectedOrganization | undefined = {} as ConnectedOrganization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(connectedOrganization),
        "createdDateTime": n => { connectedOrganization.createdDateTime = n.getDateValue(); },
        "description": n => { connectedOrganization.description = n.getStringValue(); },
        "displayName": n => { connectedOrganization.displayName = n.getStringValue(); },
        "externalSponsors": n => { connectedOrganization.externalSponsors = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "identitySources": n => { connectedOrganization.identitySources = n.getCollectionOfObjectValues<IdentitySource>(createIdentitySourceFromDiscriminatorValue); },
        "internalSponsors": n => { connectedOrganization.internalSponsors = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "modifiedDateTime": n => { connectedOrganization.modifiedDateTime = n.getDateValue(); },
        "state": n => { connectedOrganization.state = n.getEnumValue<ConnectedOrganizationState>(ConnectedOrganizationState); },
    }
}
