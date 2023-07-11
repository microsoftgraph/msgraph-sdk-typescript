import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Search extends Entity, Parsable {
    /**
     * The contentQuery property
     */
    contentQuery?: string | undefined;
    /**
     * The createdBy property
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The createdDateTime property
     */
    createdDateTime?: Date | undefined;
    /**
     * The description property
     */
    description?: string | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The lastModifiedBy property
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The lastModifiedDateTime property
     */
    lastModifiedDateTime?: Date | undefined;
}
