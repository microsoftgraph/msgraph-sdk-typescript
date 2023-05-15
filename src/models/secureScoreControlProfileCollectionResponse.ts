import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScoreControlProfileCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SecureScoreControlProfile[] | undefined;
}
