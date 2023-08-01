import type {AccessReviewInstance} from './accessReviewInstance';
import type {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import type {AccessReviewReviewer} from './accessReviewReviewer';
import type {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import type {AccessReviewScope} from './accessReviewScope';
import type {AccessReviewStage} from './accessReviewStage';
import {serializeAccessReviewInstanceDecisionItem} from './serializeAccessReviewInstanceDecisionItem';
import {serializeAccessReviewReviewer} from './serializeAccessReviewReviewer';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {serializeAccessReviewStage} from './serializeAccessReviewStage';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstance(writer: SerializationWriter, accessReviewInstance: AccessReviewInstance | undefined = {} as AccessReviewInstance) : void {
        serializeEntity(writer, accessReviewInstance)
        writer.writeCollectionOfObjectValues<AccessReviewReviewer>("contactedReviewers", accessReviewInstance.contactedReviewers, serializeAccessReviewReviewer);
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItem>("decisions", accessReviewInstance.decisions, serializeAccessReviewInstanceDecisionItem);
        writer.writeDateValue("endDateTime", accessReviewInstance.endDateTime);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", accessReviewInstance.fallbackReviewers, serializeAccessReviewReviewerScope);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", accessReviewInstance.reviewers, serializeAccessReviewReviewerScope);
        writer.writeObjectValue<AccessReviewScope>("scope", accessReviewInstance.scope, serializeAccessReviewScope);
        writer.writeCollectionOfObjectValues<AccessReviewStage>("stages", accessReviewInstance.stages, serializeAccessReviewStage);
        writer.writeDateValue("startDateTime", accessReviewInstance.startDateTime);
        writer.writeStringValue("status", accessReviewInstance.status);
}
