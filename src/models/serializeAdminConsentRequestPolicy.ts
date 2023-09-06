import { type AccessReviewReviewerScope } from './accessReviewReviewerScope';
import { type AdminConsentRequestPolicy } from './adminConsentRequestPolicy';
import { serializeAccessReviewReviewerScope } from './serializeAccessReviewReviewerScope';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAdminConsentRequestPolicy(writer: SerializationWriter, adminConsentRequestPolicy: AdminConsentRequestPolicy | undefined = {} as AdminConsentRequestPolicy) : void {
        serializeEntity(writer, adminConsentRequestPolicy)
        writer.writeBooleanValue("isEnabled", adminConsentRequestPolicy.isEnabled);
        writer.writeBooleanValue("notifyReviewers", adminConsentRequestPolicy.notifyReviewers);
        writer.writeBooleanValue("remindersEnabled", adminConsentRequestPolicy.remindersEnabled);
        writer.writeNumberValue("requestDurationInDays", adminConsentRequestPolicy.requestDurationInDays);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", adminConsentRequestPolicy.reviewers, serializeAccessReviewReviewerScope);
        writer.writeNumberValue("version", adminConsentRequestPolicy.version);
}
