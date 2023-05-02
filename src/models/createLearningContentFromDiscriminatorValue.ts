import {deserializeIntoLearningContent} from './deserializeIntoLearningContent';
import {LearningContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningContent;
}
