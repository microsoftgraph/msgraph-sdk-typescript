import {PromptImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPromptFromDiscriminatorValue(parseNode: ParseNode | undefined) : PromptImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PromptImpl();
}
