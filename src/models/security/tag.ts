import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Tag extends Entity, Parsable {
    /**
     * The createdBy property
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The description property
     */
    description?: string | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The lastModifiedDateTime property
     */
    lastModifiedDateTime?: Date | undefined;
}
