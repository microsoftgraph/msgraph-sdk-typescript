import {AccessReviewSet} from './accessReviewSet';
import {AppConsentApprovalRoute} from './appConsentApprovalRoute';
import {EntitlementManagement} from './entitlementManagement';
import {IdentityGovernance} from './identityGovernance';
import {serializeAccessReviewSet} from './serializeAccessReviewSet';
import {serializeAppConsentApprovalRoute} from './serializeAppConsentApprovalRoute';
import {serializeEntitlementManagement} from './serializeEntitlementManagement';
import {serializeTermsOfUseContainer} from './serializeTermsOfUseContainer';
import {TermsOfUseContainer} from './termsOfUseContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityGovernance(writer: SerializationWriter, identityGovernance: IdentityGovernance | undefined = {} as IdentityGovernance) : void {
        writer.writeObjectValue<AccessReviewSet>("accessReviews", identityGovernance.accessReviews, serializeAccessReviewSet);
        writer.writeObjectValue<AppConsentApprovalRoute>("appConsent", identityGovernance.appConsent, serializeAppConsentApprovalRoute);
        writer.writeObjectValue<EntitlementManagement>("entitlementManagement", identityGovernance.entitlementManagement, serializeEntitlementManagement);
        writer.writeStringValue("@odata.type", identityGovernance.odataType);
        writer.writeObjectValue<TermsOfUseContainer>("termsOfUse", identityGovernance.termsOfUse, serializeTermsOfUseContainer);
        writer.writeAdditionalData(identityGovernance.additionalData);
}
