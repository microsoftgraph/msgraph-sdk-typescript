import { type AccessReviewSet } from './accessReviewSet';
import { type AppConsentApprovalRoute } from './appConsentApprovalRoute';
import { type EntitlementManagement } from './entitlementManagement';
import { type LifecycleWorkflowsContainer } from './identityGovernance/lifecycleWorkflowsContainer';
import { type TermsOfUseContainer } from './termsOfUseContainer';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface IdentityGovernance extends AdditionalDataHolder, Parsable {
    /**
     * The accessReviews property
     */
    accessReviews?: AccessReviewSet | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The appConsent property
     */
    appConsent?: AppConsentApprovalRoute | undefined;
    /**
     * The entitlementManagement property
     */
    entitlementManagement?: EntitlementManagement | undefined;
    /**
     * The lifecycleWorkflows property
     */
    lifecycleWorkflows?: LifecycleWorkflowsContainer | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The termsOfUse property
     */
    termsOfUse?: TermsOfUseContainer | undefined;
}
