import type {AgreementAcceptance} from './agreementAcceptance';
import type {AgreementFile} from './agreementFile';
import type {AgreementFileLocalization} from './agreementFileLocalization';
import type {Entity} from './entity';
import type {TermsExpiration} from './termsExpiration';
import {Duration} from '@microsoft/kiota-abstractions';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Agreement extends Entity, Parsable {
    /**
     * Read-only. Information about acceptances of this agreement.
     */
    acceptances?: AgreementAcceptance[] | undefined;
    /**
     * Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement. Supports $filter (eq).
     */
    displayName?: string | undefined;
    /**
     * Default PDF linked to this agreement.
     */
    file?: AgreementFile | undefined;
    /**
     * PDFs linked to this agreement. This property is in the process of being deprecated. Use the  file property instead. Supports $expand.
     */
    files?: AgreementFileLocalization[] | undefined;
    /**
     * Indicates whether end users are required to accept this agreement on every device that they access it from. The end user is required to register their device in Azure AD, if they haven't already done so. Supports $filter (eq).
     */
    isPerDeviceAcceptanceRequired?: boolean | undefined;
    /**
     * Indicates whether the user has to expand the agreement before accepting. Supports $filter (eq).
     */
    isViewingBeforeAcceptanceRequired?: boolean | undefined;
    /**
     * Expiration schedule and frequency of agreement for all users. Supports $filter (eq).
     */
    termsExpiration?: TermsExpiration | undefined;
    /**
     * The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations. Supports $filter (eq).
     */
    userReacceptRequiredFrequency?: Duration | undefined;
}
