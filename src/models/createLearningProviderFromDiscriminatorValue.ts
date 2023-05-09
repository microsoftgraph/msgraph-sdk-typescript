import {deserializeIntoLearningProvider} from './deserializeIntoLearningProvider';
import {LearningProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningProvider;
}
