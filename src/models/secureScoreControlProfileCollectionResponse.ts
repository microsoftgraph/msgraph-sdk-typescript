import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type SecureScoreControlProfile } from './secureScoreControlProfile';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SecureScoreControlProfileCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SecureScoreControlProfile[] | undefined;
}
