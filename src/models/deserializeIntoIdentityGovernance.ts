import {AccessReviewSet} from './accessReviewSet';
import {AppConsentApprovalRoute} from './appConsentApprovalRoute';
import {createAccessReviewSetFromDiscriminatorValue} from './createAccessReviewSetFromDiscriminatorValue';
import {createAppConsentApprovalRouteFromDiscriminatorValue} from './createAppConsentApprovalRouteFromDiscriminatorValue';
import {createEntitlementManagementFromDiscriminatorValue} from './createEntitlementManagementFromDiscriminatorValue';
import {createTermsOfUseContainerFromDiscriminatorValue} from './createTermsOfUseContainerFromDiscriminatorValue';
import {EntitlementManagement} from './entitlementManagement';
import {IdentityGovernance} from './identityGovernance';
import {serializeAccessReviewSet} from './serializeAccessReviewSet';
import {serializeAppConsentApprovalRoute} from './serializeAppConsentApprovalRoute';
import {serializeEntitlementManagement} from './serializeEntitlementManagement';
import {serializeTermsOfUseContainer} from './serializeTermsOfUseContainer';
import {TermsOfUseContainer} from './termsOfUseContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityGovernance(identityGovernance: IdentityGovernance | undefined = {} as IdentityGovernance) : Record<string, (node: ParseNode) => void> {
    return {
        "accessReviews": n => { identityGovernance.accessReviews = n.getObjectValue<AccessReviewSet>(createAccessReviewSetFromDiscriminatorValue); },
        "appConsent": n => { identityGovernance.appConsent = n.getObjectValue<AppConsentApprovalRoute>(createAppConsentApprovalRouteFromDiscriminatorValue); },
        "entitlementManagement": n => { identityGovernance.entitlementManagement = n.getObjectValue<EntitlementManagement>(createEntitlementManagementFromDiscriminatorValue); },
        "@odata.type": n => { identityGovernance.odataType = n.getStringValue(); },
        "termsOfUse": n => { identityGovernance.termsOfUse = n.getObjectValue<TermsOfUseContainer>(createTermsOfUseContainerFromDiscriminatorValue); },
    }
}
