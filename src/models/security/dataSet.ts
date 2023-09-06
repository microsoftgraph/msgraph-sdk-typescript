import { type Entity } from '../entity';
import { type IdentitySet } from '../identitySet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DataSet extends Entity, Parsable {
    /**
     * The createdBy property
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The createdDateTime property
     */
    createdDateTime?: Date | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
}
