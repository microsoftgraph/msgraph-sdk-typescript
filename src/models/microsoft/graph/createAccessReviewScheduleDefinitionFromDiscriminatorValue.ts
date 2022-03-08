import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScheduleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewScheduleDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewScheduleDefinition();
}
