import type {AccessReviewSet} from './accessReviewSet';
import type {AppConsentApprovalRoute} from './appConsentApprovalRoute';
import type {EntitlementManagement} from './entitlementManagement';
import type {IdentityGovernance} from './identityGovernance';
import type {LifecycleWorkflowsContainer} from './identityGovernance/lifecycleWorkflowsContainer';
import {serializeLifecycleWorkflowsContainer} from './identityGovernance/serializeLifecycleWorkflowsContainer';
import {serializeAccessReviewSet} from './serializeAccessReviewSet';
import {serializeAppConsentApprovalRoute} from './serializeAppConsentApprovalRoute';
import {serializeEntitlementManagement} from './serializeEntitlementManagement';
import {serializeTermsOfUseContainer} from './serializeTermsOfUseContainer';
import type {TermsOfUseContainer} from './termsOfUseContainer';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityGovernance(writer: SerializationWriter, identityGovernance: IdentityGovernance | undefined = {} as IdentityGovernance) : void {
        writer.writeObjectValue<AccessReviewSet>("accessReviews", identityGovernance.accessReviews, serializeAccessReviewSet);
        writer.writeObjectValue<AppConsentApprovalRoute>("appConsent", identityGovernance.appConsent, serializeAppConsentApprovalRoute);
        writer.writeObjectValue<EntitlementManagement>("entitlementManagement", identityGovernance.entitlementManagement, serializeEntitlementManagement);
        writer.writeObjectValue<LifecycleWorkflowsContainer>("lifecycleWorkflows", identityGovernance.lifecycleWorkflows, serializeLifecycleWorkflowsContainer);
        writer.writeStringValue("@odata.type", identityGovernance.odataType);
        writer.writeObjectValue<TermsOfUseContainer>("termsOfUse", identityGovernance.termsOfUse, serializeTermsOfUseContainer);
        writer.writeAdditionalData(identityGovernance.additionalData);
}
