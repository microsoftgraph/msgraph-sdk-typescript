import { deserializeIntoAccessPackageTextInputQuestion } from './deserializeIntoAccessPackageTextInputQuestion';
import { type AccessPackageTextInputQuestion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageTextInputQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageTextInputQuestion;
}
