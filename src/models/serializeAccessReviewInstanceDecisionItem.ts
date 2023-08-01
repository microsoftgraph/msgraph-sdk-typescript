import type {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import type {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import type {GovernanceInsight} from './governanceInsight';
import type {Identity} from './identity';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import {serializeEntity} from './serializeEntity';
import {serializeGovernanceInsight} from './serializeGovernanceInsight';
import {serializeIdentity} from './serializeIdentity';
import {serializeUserIdentity} from './serializeUserIdentity';
import type {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItem(writer: SerializationWriter, accessReviewInstanceDecisionItem: AccessReviewInstanceDecisionItem | undefined = {} as AccessReviewInstanceDecisionItem) : void {
        serializeEntity(writer, accessReviewInstanceDecisionItem)
        writer.writeStringValue("accessReviewId", accessReviewInstanceDecisionItem.accessReviewId);
        writer.writeObjectValue<UserIdentity>("appliedBy", accessReviewInstanceDecisionItem.appliedBy, serializeUserIdentity);
        writer.writeDateValue("appliedDateTime", accessReviewInstanceDecisionItem.appliedDateTime);
        writer.writeStringValue("applyResult", accessReviewInstanceDecisionItem.applyResult);
        writer.writeStringValue("decision", accessReviewInstanceDecisionItem.decision);
        writer.writeCollectionOfObjectValues<GovernanceInsight>("insights", accessReviewInstanceDecisionItem.insights, serializeGovernanceInsight);
        writer.writeStringValue("justification", accessReviewInstanceDecisionItem.justification);
        writer.writeObjectValue<Identity>("principal", accessReviewInstanceDecisionItem.principal, serializeIdentity);
        writer.writeStringValue("principalLink", accessReviewInstanceDecisionItem.principalLink);
        writer.writeStringValue("recommendation", accessReviewInstanceDecisionItem.recommendation);
        writer.writeObjectValue<AccessReviewInstanceDecisionItemResource>("resource", accessReviewInstanceDecisionItem.resource, serializeAccessReviewInstanceDecisionItemResource);
        writer.writeStringValue("resourceLink", accessReviewInstanceDecisionItem.resourceLink);
        writer.writeObjectValue<UserIdentity>("reviewedBy", accessReviewInstanceDecisionItem.reviewedBy, serializeUserIdentity);
        writer.writeDateValue("reviewedDateTime", accessReviewInstanceDecisionItem.reviewedDateTime);
}
