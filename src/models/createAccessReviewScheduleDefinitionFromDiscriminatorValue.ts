import {deserializeIntoAccessReviewScheduleDefinition} from './deserializeIntoAccessReviewScheduleDefinition';
import {AccessReviewScheduleDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScheduleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewScheduleDefinition;
}
