import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MailAssessmentRequest extends Partial<AdditionalDataHolder>, Partial<Parsable>, ThreatAssessmentRequest {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender, advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox, autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk. */
    destinationRoutingReason?: MailDestinationRoutingReason | undefined;
    /** The resource URI of the mail message for assessment. */
    messageUri?: string | undefined;
    /** The mail recipient whose policies are used to assess the mail. */
    recipientEmail?: string | undefined;
}
