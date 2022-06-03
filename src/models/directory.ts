import {AdministrativeUnit} from './administrativeUnit';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {IdentityProviderBase} from './identityProviderBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Directory extends Entity, Partial<Parsable> {
    /** Conceptual container for user and group directory objects. */
    administrativeUnits?: AdministrativeUnit[] | undefined;
    /** Recently deleted items. Read-only. Nullable. */
    deletedItems?: DirectoryObject[] | undefined;
    /** Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol. */
    federationConfigurations?: IdentityProviderBase[] | undefined;
}
