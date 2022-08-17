import {MediaPrompt, Prompt} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPromptFromDiscriminatorValue(parseNode: ParseNode | undefined) : Prompt {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.mediaPrompt":
                    return new MediaPrompt();
            }
        }
    }
    return new Prompt();
}
