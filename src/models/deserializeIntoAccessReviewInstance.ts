import { type AccessReviewInstance } from './accessReviewInstance';
import { type AccessReviewInstanceDecisionItem } from './accessReviewInstanceDecisionItem';
import { type AccessReviewReviewer } from './accessReviewReviewer';
import { type AccessReviewReviewerScope } from './accessReviewReviewerScope';
import { type AccessReviewScope } from './accessReviewScope';
import { type AccessReviewStage } from './accessReviewStage';
import { createAccessReviewInstanceDecisionItemFromDiscriminatorValue } from './createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import { createAccessReviewReviewerFromDiscriminatorValue } from './createAccessReviewReviewerFromDiscriminatorValue';
import { createAccessReviewReviewerScopeFromDiscriminatorValue } from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import { createAccessReviewScopeFromDiscriminatorValue } from './createAccessReviewScopeFromDiscriminatorValue';
import { createAccessReviewStageFromDiscriminatorValue } from './createAccessReviewStageFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeAccessReviewInstanceDecisionItem } from './serializeAccessReviewInstanceDecisionItem';
import { serializeAccessReviewReviewer } from './serializeAccessReviewReviewer';
import { serializeAccessReviewReviewerScope } from './serializeAccessReviewReviewerScope';
import { serializeAccessReviewScope } from './serializeAccessReviewScope';
import { serializeAccessReviewStage } from './serializeAccessReviewStage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstance(accessReviewInstance: AccessReviewInstance | undefined = {} as AccessReviewInstance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewInstance),
        "contactedReviewers": n => { accessReviewInstance.contactedReviewers = n.getCollectionOfObjectValues<AccessReviewReviewer>(createAccessReviewReviewerFromDiscriminatorValue); },
        "decisions": n => { accessReviewInstance.decisions = n.getCollectionOfObjectValues<AccessReviewInstanceDecisionItem>(createAccessReviewInstanceDecisionItemFromDiscriminatorValue); },
        "endDateTime": n => { accessReviewInstance.endDateTime = n.getDateValue(); },
        "fallbackReviewers": n => { accessReviewInstance.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "reviewers": n => { accessReviewInstance.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "scope": n => { accessReviewInstance.scope = n.getObjectValue<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
        "stages": n => { accessReviewInstance.stages = n.getCollectionOfObjectValues<AccessReviewStage>(createAccessReviewStageFromDiscriminatorValue); },
        "startDateTime": n => { accessReviewInstance.startDateTime = n.getDateValue(); },
        "status": n => { accessReviewInstance.status = n.getStringValue(); },
    }
}
