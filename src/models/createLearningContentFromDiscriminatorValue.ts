import { deserializeIntoLearningContent } from './deserializeIntoLearningContent';
import { type LearningContent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLearningContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningContent;
}
