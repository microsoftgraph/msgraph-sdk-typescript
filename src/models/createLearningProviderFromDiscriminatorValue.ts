import {LearningProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : LearningProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LearningProvider();
}
