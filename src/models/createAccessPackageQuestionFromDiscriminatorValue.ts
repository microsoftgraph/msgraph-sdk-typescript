import {AccessPackageMultipleChoiceQuestion, AccessPackageQuestion, AccessPackageTextInputQuestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageQuestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessPackageMultipleChoiceQuestion":
                    return new AccessPackageMultipleChoiceQuestion();
                case "#microsoft.graph.accessPackageTextInputQuestion":
                    return new AccessPackageTextInputQuestion();
            }
        }
    }
    return new AccessPackageQuestion();
}
