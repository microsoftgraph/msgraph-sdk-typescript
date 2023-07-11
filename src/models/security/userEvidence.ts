import {AlertEvidence} from './alertEvidence';
import {UserAccount} from './userAccount';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserEvidence extends AlertEvidence, Parsable {
    /**
     * The user account details.
     */
    userAccount?: UserAccount | undefined;
}
