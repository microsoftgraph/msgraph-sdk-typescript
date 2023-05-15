import {AdministrativeUnit} from './administrativeUnit';
import {AttributeSet} from './attributeSet';
import {CustomSecurityAttributeDefinition} from './customSecurityAttributeDefinition';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {IdentityProviderBase} from './identityProviderBase';
import {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Directory extends Entity, Parsable {
    /** Conceptual container for user and group directory objects. */
    administrativeUnits?: AdministrativeUnit[] | undefined;
    /** The attributeSets property */
    attributeSets?: AttributeSet[] | undefined;
    /** The customSecurityAttributeDefinitions property */
    customSecurityAttributeDefinitions?: CustomSecurityAttributeDefinition[] | undefined;
    /** Recently deleted items. Read-only. Nullable. */
    deletedItems?: DirectoryObject[] | undefined;
    /** Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol. */
    federationConfigurations?: IdentityProviderBase[] | undefined;
    /** A container for on-premises directory synchronization functionalities that are available for the organization. */
    onPremisesSynchronization?: OnPremisesDirectorySynchronization[] | undefined;
}
