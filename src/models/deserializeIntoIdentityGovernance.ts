import { type AccessReviewSet } from './accessReviewSet';
import { type AppConsentApprovalRoute } from './appConsentApprovalRoute';
import { createAccessReviewSetFromDiscriminatorValue } from './createAccessReviewSetFromDiscriminatorValue';
import { createAppConsentApprovalRouteFromDiscriminatorValue } from './createAppConsentApprovalRouteFromDiscriminatorValue';
import { createEntitlementManagementFromDiscriminatorValue } from './createEntitlementManagementFromDiscriminatorValue';
import { createTermsOfUseContainerFromDiscriminatorValue } from './createTermsOfUseContainerFromDiscriminatorValue';
import { type EntitlementManagement } from './entitlementManagement';
import { type IdentityGovernance } from './identityGovernance';
import { createLifecycleWorkflowsContainerFromDiscriminatorValue } from './identityGovernance/createLifecycleWorkflowsContainerFromDiscriminatorValue';
import { type LifecycleWorkflowsContainer } from './identityGovernance/lifecycleWorkflowsContainer';
import { serializeLifecycleWorkflowsContainer } from './identityGovernance/serializeLifecycleWorkflowsContainer';
import { serializeAccessReviewSet } from './serializeAccessReviewSet';
import { serializeAppConsentApprovalRoute } from './serializeAppConsentApprovalRoute';
import { serializeEntitlementManagement } from './serializeEntitlementManagement';
import { serializeTermsOfUseContainer } from './serializeTermsOfUseContainer';
import { type TermsOfUseContainer } from './termsOfUseContainer';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityGovernance(identityGovernance: IdentityGovernance | undefined = {} as IdentityGovernance) : Record<string, (node: ParseNode) => void> {
    return {
        "accessReviews": n => { identityGovernance.accessReviews = n.getObjectValue<AccessReviewSet>(createAccessReviewSetFromDiscriminatorValue); },
        "appConsent": n => { identityGovernance.appConsent = n.getObjectValue<AppConsentApprovalRoute>(createAppConsentApprovalRouteFromDiscriminatorValue); },
        "entitlementManagement": n => { identityGovernance.entitlementManagement = n.getObjectValue<EntitlementManagement>(createEntitlementManagementFromDiscriminatorValue); },
        "lifecycleWorkflows": n => { identityGovernance.lifecycleWorkflows = n.getObjectValue<LifecycleWorkflowsContainer>(createLifecycleWorkflowsContainerFromDiscriminatorValue); },
        "@odata.type": n => { identityGovernance.odataType = n.getStringValue(); },
        "termsOfUse": n => { identityGovernance.termsOfUse = n.getObjectValue<TermsOfUseContainer>(createTermsOfUseContainerFromDiscriminatorValue); },
    }
}
