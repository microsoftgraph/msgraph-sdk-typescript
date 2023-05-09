import {deserializeIntoAccessPackageTextInputQuestion} from './deserializeIntoAccessPackageTextInputQuestion';
import {AccessPackageTextInputQuestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageTextInputQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageTextInputQuestion;
}
