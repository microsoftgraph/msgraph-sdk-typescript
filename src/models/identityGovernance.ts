import {AccessReviewSet} from './accessReviewSet';
import {AppConsentApprovalRoute} from './appConsentApprovalRoute';
import {EntitlementManagement} from './entitlementManagement';
import {TermsOfUseContainer} from './termsOfUseContainer';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityGovernance extends AdditionalDataHolder, Parsable {
    /** The accessReviews property */
    accessReviews?: AccessReviewSet | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The appConsent property */
    appConsent?: AppConsentApprovalRoute | undefined;
    /** The entitlementManagement property */
    entitlementManagement?: EntitlementManagement | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The termsOfUse property */
    termsOfUse?: TermsOfUseContainer | undefined;
}
