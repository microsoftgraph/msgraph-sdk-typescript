import {MediaPromptImpl, PromptImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPromptFromDiscriminatorValue(parseNode: ParseNode | undefined) : PromptImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.mediaPrompt":
                    return new MediaPromptImpl();
            }
        }
    }
    return new PromptImpl();
}
