import {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewStage} from './accessReviewStage';
import {serializeAccessReviewInstanceDecisionItem} from './serializeAccessReviewInstanceDecisionItem';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewStage(writer: SerializationWriter, accessReviewStage: AccessReviewStage | undefined = {} as AccessReviewStage) : void {
        serializeEntity(writer, accessReviewStage)
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItem>("decisions", accessReviewStage.decisions, serializeAccessReviewInstanceDecisionItem);
        writer.writeDateValue("endDateTime", accessReviewStage.endDateTime);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", accessReviewStage.fallbackReviewers, serializeAccessReviewReviewerScope);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", accessReviewStage.reviewers, serializeAccessReviewReviewerScope);
        writer.writeDateValue("startDateTime", accessReviewStage.startDateTime);
        writer.writeStringValue("status", accessReviewStage.status);
}
