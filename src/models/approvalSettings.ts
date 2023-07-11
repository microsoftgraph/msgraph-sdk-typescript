import {UnifiedApprovalStage} from './unifiedApprovalStage';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApprovalSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * One of SingleStage, Serial, Parallel, NoApproval (default). NoApproval is used when isApprovalRequired is false.
     */
    approvalMode?: string | undefined;
    /**
     * If approval is required, the one or two elements of this collection define each of the stages of approval. An empty array if no approval is required.
     */
    approvalStages?: UnifiedApprovalStage[] | undefined;
    /**
     * Indicates whether approval is required for requests in this policy.
     */
    isApprovalRequired?: boolean | undefined;
    /**
     * Indicates whether approval is required for a user to extend their assignment.
     */
    isApprovalRequiredForExtension?: boolean | undefined;
    /**
     * Indicates whether the requestor is required to supply a justification in their request.
     */
    isRequestorJustificationRequired?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
