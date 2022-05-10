import {PlayPromptOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlayPromptOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlayPromptOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlayPromptOperationImpl();
}
