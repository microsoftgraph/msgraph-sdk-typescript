import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

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
