import {deserializeIntoAccessPackageAnswerChoice} from './deserializeIntoAccessPackageAnswerChoice';
import {AccessPackageAnswerChoice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAnswerChoiceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAnswerChoice;
}
