import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageApprovalStage extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The number of days that a request can be pending a response before it is automatically denied.
     */
    durationBeforeAutomaticDenial?: Duration | undefined;
    /**
     * If escalation is required, the time a request can be pending a response from a primary approver.
     */
    durationBeforeEscalation?: Duration | undefined;
    /**
     * If escalation is enabled and the primary approvers do not respond before the escalation time, the escalationApprovers are the users who will be asked to approve requests.
     */
    escalationApprovers?: SubjectSet[] | undefined;
    /**
     * The subjects, typically users, who are the fallback escalation approvers.
     */
    fallbackEscalationApprovers?: SubjectSet[] | undefined;
    /**
     * The subjects, typically users, who are the fallback primary approvers.
     */
    fallbackPrimaryApprovers?: SubjectSet[] | undefined;
    /**
     * Indicates whether the approver is required to provide a justification for approving a request.
     */
    isApproverJustificationRequired?: boolean | undefined;
    /**
     * If true, then one or more escalationApprovers are configured in this approval stage.
     */
    isEscalationEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The subjects, typically users, who will be asked to approve requests. A collection of singleUser, groupMembers, requestorManager, internalSponsors or externalSponsors.
     */
    primaryApprovers?: SubjectSet[] | undefined;
}
