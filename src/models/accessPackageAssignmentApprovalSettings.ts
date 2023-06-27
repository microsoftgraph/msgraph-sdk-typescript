import {AccessPackageApprovalStage} from './accessPackageApprovalStage';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentApprovalSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If false, then approval is not required for new requests in this policy.
     */
    isApprovalRequiredForAdd?: boolean | undefined;
    /**
     * If false, then approval is not required for updates to requests in this policy.
     */
    isApprovalRequiredForUpdate?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * If approval is required, the one, two or three elements of this collection define each of the stages of approval. An empty array is present if no approval is required.
     */
    stages?: AccessPackageApprovalStage[] | undefined;
}
