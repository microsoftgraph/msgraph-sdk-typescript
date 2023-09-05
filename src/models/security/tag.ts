import { type Entity } from '../entity';
import { type IdentitySet } from '../identitySet';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
