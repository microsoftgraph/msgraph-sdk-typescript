import { type AccessReviewInstanceDecisionItem } from './accessReviewInstanceDecisionItem';
import { type AccessReviewReviewerScope } from './accessReviewReviewerScope';
import { type AccessReviewStage } from './accessReviewStage';
import { serializeAccessReviewInstanceDecisionItem } from './serializeAccessReviewInstanceDecisionItem';
import { serializeAccessReviewReviewerScope } from './serializeAccessReviewReviewerScope';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewStage(writer: SerializationWriter, accessReviewStage: AccessReviewStage | undefined = {} as AccessReviewStage) : void {
        serializeEntity(writer, accessReviewStage)
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItem>("decisions", accessReviewStage.decisions, serializeAccessReviewInstanceDecisionItem);
        writer.writeDateValue("endDateTime", accessReviewStage.endDateTime);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", accessReviewStage.fallbackReviewers, serializeAccessReviewReviewerScope);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", accessReviewStage.reviewers, serializeAccessReviewReviewerScope);
        writer.writeDateValue("startDateTime", accessReviewStage.startDateTime);
        writer.writeStringValue("status", accessReviewStage.status);
}
