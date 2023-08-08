import type {AdministrativeUnit} from './administrativeUnit';
import type {AttributeSet} from './attributeSet';
import type {CustomSecurityAttributeDefinition} from './customSecurityAttributeDefinition';
import type {DirectoryObject} from './directoryObject';
import type {Entity} from './entity';
import type {IdentityProviderBase} from './identityProviderBase';
import type {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Directory extends Entity, Parsable {
    /**
     * Conceptual container for user and group directory objects.
     */
    administrativeUnits?: AdministrativeUnit[] | undefined;
    /**
     * Group of related custom security attribute definitions.
     */
    attributeSets?: AttributeSet[] | undefined;
    /**
     * Schema of a custom security attributes (key-value pairs).
     */
    customSecurityAttributeDefinitions?: CustomSecurityAttributeDefinition[] | undefined;
    /**
     * Recently deleted items. Read-only. Nullable.
     */
    deletedItems?: DirectoryObject[] | undefined;
    /**
     * Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
     */
    federationConfigurations?: IdentityProviderBase[] | undefined;
    /**
     * A container for on-premises directory synchronization functionalities that are available for the organization.
     */
    onPremisesSynchronization?: OnPremisesDirectorySynchronization[] | undefined;
}
