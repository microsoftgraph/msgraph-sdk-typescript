import {AdministrativeUnit} from './administrativeUnit';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {IdentityProviderBase} from './identityProviderBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Directory extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Conceptual container for user and group directory objects. */
    administrativeUnits?: AdministrativeUnit[] | undefined;
    /** Recently deleted items. Read-only. Nullable. */
    deletedItems?: DirectoryObject[] | undefined;
    /** Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol. */
    federationConfigurations?: IdentityProviderBase[] | undefined;
}
