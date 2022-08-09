import {Case_escaped, EdiscoveryCase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCase_escapedFromDiscriminatorValue(parseNode: ParseNode | undefined) : Case_escaped {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryCase":
                    return new EdiscoveryCase();
            }
        }
    }
    return new Case_escaped();
}
