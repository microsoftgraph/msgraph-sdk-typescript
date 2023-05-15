import {deserializeIntoAccessPackageMultipleChoiceQuestion} from './deserializeIntoAccessPackageMultipleChoiceQuestion';
import {deserializeIntoAccessPackageQuestion} from './deserializeIntoAccessPackageQuestion';
import {deserializeIntoAccessPackageTextInputQuestion} from './deserializeIntoAccessPackageTextInputQuestion';
import {AccessPackageMultipleChoiceQuestion, AccessPackageQuestion, AccessPackageTextInputQuestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessPackageMultipleChoiceQuestion":
                    return deserializeIntoAccessPackageMultipleChoiceQuestion;
                case "#microsoft.graph.accessPackageTextInputQuestion":
                    return deserializeIntoAccessPackageTextInputQuestion;
            }
        }
    }
    return deserializeIntoAccessPackageQuestion;
}
