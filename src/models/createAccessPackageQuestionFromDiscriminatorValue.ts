import { deserializeIntoAccessPackageMultipleChoiceQuestion } from './deserializeIntoAccessPackageMultipleChoiceQuestion';
import { deserializeIntoAccessPackageQuestion } from './deserializeIntoAccessPackageQuestion';
import { deserializeIntoAccessPackageTextInputQuestion } from './deserializeIntoAccessPackageTextInputQuestion';
import { type AccessPackageMultipleChoiceQuestion, type AccessPackageQuestion, type AccessPackageTextInputQuestion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

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
