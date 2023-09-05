import { deserializeIntoLearningProvider } from './deserializeIntoLearningProvider';
import { type LearningProvider } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLearningProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningProvider;
}
