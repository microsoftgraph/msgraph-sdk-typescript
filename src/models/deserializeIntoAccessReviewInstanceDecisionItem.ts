import {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue';
import {createGovernanceInsightFromDiscriminatorValue} from './createGovernanceInsightFromDiscriminatorValue';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {GovernanceInsight} from './governanceInsight';
import {Identity} from './identity';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import {serializeGovernanceInsight} from './serializeGovernanceInsight';
import {serializeIdentity} from './serializeIdentity';
import {serializeUserIdentity} from './serializeUserIdentity';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItem(accessReviewInstanceDecisionItem: AccessReviewInstanceDecisionItem | undefined = {} as AccessReviewInstanceDecisionItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewInstanceDecisionItem),
        "accessReviewId": n => { accessReviewInstanceDecisionItem.accessReviewId = n.getStringValue(); },
        "appliedBy": n => { accessReviewInstanceDecisionItem.appliedBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
        "appliedDateTime": n => { accessReviewInstanceDecisionItem.appliedDateTime = n.getDateValue(); },
        "applyResult": n => { accessReviewInstanceDecisionItem.applyResult = n.getStringValue(); },
        "decision": n => { accessReviewInstanceDecisionItem.decision = n.getStringValue(); },
        "insights": n => { accessReviewInstanceDecisionItem.insights = n.getCollectionOfObjectValues<GovernanceInsight>(createGovernanceInsightFromDiscriminatorValue); },
        "justification": n => { accessReviewInstanceDecisionItem.justification = n.getStringValue(); },
        "principal": n => { accessReviewInstanceDecisionItem.principal = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "principalLink": n => { accessReviewInstanceDecisionItem.principalLink = n.getStringValue(); },
        "recommendation": n => { accessReviewInstanceDecisionItem.recommendation = n.getStringValue(); },
        "resource": n => { accessReviewInstanceDecisionItem.resource = n.getObjectValue<AccessReviewInstanceDecisionItemResource>(createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue); },
        "resourceLink": n => { accessReviewInstanceDecisionItem.resourceLink = n.getStringValue(); },
        "reviewedBy": n => { accessReviewInstanceDecisionItem.reviewedBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
        "reviewedDateTime": n => { accessReviewInstanceDecisionItem.reviewedDateTime = n.getDateValue(); },
    }
}
