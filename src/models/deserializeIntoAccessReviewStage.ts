import {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewStage} from './accessReviewStage';
import {createAccessReviewInstanceDecisionItemFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessReviewInstanceDecisionItem} from './serializeAccessReviewInstanceDecisionItem';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewStage(accessReviewStage: AccessReviewStage | undefined = {} as AccessReviewStage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewStage),
        "decisions": n => { accessReviewStage.decisions = n.getCollectionOfObjectValues<AccessReviewInstanceDecisionItem>(createAccessReviewInstanceDecisionItemFromDiscriminatorValue); },
        "endDateTime": n => { accessReviewStage.endDateTime = n.getDateValue(); },
        "fallbackReviewers": n => { accessReviewStage.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "reviewers": n => { accessReviewStage.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "startDateTime": n => { accessReviewStage.startDateTime = n.getDateValue(); },
        "status": n => { accessReviewStage.status = n.getStringValue(); },
    }
}
