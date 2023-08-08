import type {AlertEvidence} from './alertEvidence';
import type {UserAccount} from './userAccount';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserEvidence extends AlertEvidence, Parsable {
    /**
     * The user account details.
     */
    userAccount?: UserAccount | undefined;
}
