import {AccessReviewScheduleDefinitionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScheduleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewScheduleDefinitionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewScheduleDefinitionImpl();
}
