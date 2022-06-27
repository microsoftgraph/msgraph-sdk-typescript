import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {PublicationFacet} from './publicationFacet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItemVersion extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Identity of the user which last modified the version. Read-only. */
    lastModifiedBy?: IdentitySet | undefined;
    /** Date and time the version was last modified. Read-only. */
    lastModifiedDateTime?: Date | undefined;
    /** Indicates the publication status of this particular version. Read-only. */
    publication?: PublicationFacet | undefined;
}
