import {PlayPromptResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlayPromptResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : PlayPromptResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlayPromptResponseMember1();
}
