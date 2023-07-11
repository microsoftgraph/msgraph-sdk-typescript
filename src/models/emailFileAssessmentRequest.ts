import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailFileAssessmentRequest extends Parsable, ThreatAssessmentRequest {
    /**
     * Base64 encoded .eml email file content. The file content cannot fetch back because it isn't stored.
     */
    contentData?: string | undefined;
    /**
     * The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender, advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox, autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk.
     */
    destinationRoutingReason?: MailDestinationRoutingReason | undefined;
    /**
     * The mail recipient whose policies are used to assess the mail.
     */
    recipientEmail?: string | undefined;
}
