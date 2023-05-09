import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AdminConsentRequestPolicy} from './adminConsentRequestPolicy';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdminConsentRequestPolicy(adminConsentRequestPolicy: AdminConsentRequestPolicy | undefined = {} as AdminConsentRequestPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(adminConsentRequestPolicy),
        "isEnabled": n => { adminConsentRequestPolicy.isEnabled = n.getBooleanValue(); },
        "notifyReviewers": n => { adminConsentRequestPolicy.notifyReviewers = n.getBooleanValue(); },
        "remindersEnabled": n => { adminConsentRequestPolicy.remindersEnabled = n.getBooleanValue(); },
        "requestDurationInDays": n => { adminConsentRequestPolicy.requestDurationInDays = n.getNumberValue(); },
        "reviewers": n => { adminConsentRequestPolicy.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "version": n => { adminConsentRequestPolicy.version = n.getNumberValue(); },
    }
}
