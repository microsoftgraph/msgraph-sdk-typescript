import {deserializeIntoDictionary} from './deserializeIntoDictionary';
import {deserializeIntoResultTemplateDictionary} from './deserializeIntoResultTemplateDictionary';
import {Dictionary, ResultTemplateDictionary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDictionaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.resultTemplateDictionary":
                    return deserializeIntoResultTemplateDictionary;
            }
        }
    }
    return deserializeIntoDictionary;
}
