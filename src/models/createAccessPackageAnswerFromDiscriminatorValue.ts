import { deserializeIntoAccessPackageAnswer } from './deserializeIntoAccessPackageAnswer';
import { deserializeIntoAccessPackageAnswerString } from './deserializeIntoAccessPackageAnswerString';
import { type AccessPackageAnswer, type AccessPackageAnswerString } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAnswerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessPackageAnswerString":
                    return deserializeIntoAccessPackageAnswerString;
            }
        }
    }
    return deserializeIntoAccessPackageAnswer;
}
