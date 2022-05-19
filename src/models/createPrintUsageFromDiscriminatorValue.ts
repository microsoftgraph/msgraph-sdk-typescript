import {PrintUsage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.printUsage":
                    return new PrintUsage();
            }
        }
    }
    return new PrintUsage();
}
