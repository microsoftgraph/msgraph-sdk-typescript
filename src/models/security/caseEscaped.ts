import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {CaseStatus} from './caseStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CaseEscaped extends Entity, Parsable {
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
    /**
     * The status property
     */
    status?: CaseStatus | undefined;
}
