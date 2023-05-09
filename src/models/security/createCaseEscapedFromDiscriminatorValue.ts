import {deserializeIntoCaseEscaped} from './deserializeIntoCaseEscaped';
import {deserializeIntoEdiscoveryCase} from './deserializeIntoEdiscoveryCase';
import {CaseEscaped, EdiscoveryCase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCaseEscapedFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryCase":
                    return deserializeIntoEdiscoveryCase;
            }
        }
    }
    return deserializeIntoCaseEscaped;
}
