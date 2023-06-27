import {AlertEvidence} from './alertEvidence';
import {UserAccount} from './userAccount';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MailboxEvidence extends AlertEvidence, Parsable {
    /**
     * The name associated with the mailbox.
     */
    displayName?: string | undefined;
    /**
     * The primary email address of the mailbox.
     */
    primaryAddress?: string | undefined;
    /**
     * The user account of the mailbox.
     */
    userAccount?: UserAccount | undefined;
}
