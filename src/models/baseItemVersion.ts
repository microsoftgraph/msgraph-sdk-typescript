import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {PublicationFacet} from './publicationFacet';

export interface BaseItemVersion extends Entity{
    /** Identity of the user which last modified the version. Read-only. */
    lastModifiedBy?:IdentitySet | undefined;
    /** Date and time the version was last modified. Read-only. */
    lastModifiedDateTime?:Date | undefined;
    /** Indicates the publication status of this particular version. Read-only. */
    publication?:PublicationFacet | undefined;
}
