import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {PublicationFacet} from './publicationFacet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItemVersion extends Entity, Parsable {
    /**
     * Identity of the user which last modified the version. Read-only.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * Date and time the version was last modified. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Indicates the publication status of this particular version. Read-only.
     */
    publication?: PublicationFacet | undefined;
}
