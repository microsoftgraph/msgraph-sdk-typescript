import { deserializeIntoAccessReviewHistoryDefinition } from './deserializeIntoAccessReviewHistoryDefinition';
import { type AccessReviewHistoryDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewHistoryDefinition;
}
