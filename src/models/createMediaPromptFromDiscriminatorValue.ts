import {MediaPromptImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaPromptFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaPromptImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaPromptImpl();
}
