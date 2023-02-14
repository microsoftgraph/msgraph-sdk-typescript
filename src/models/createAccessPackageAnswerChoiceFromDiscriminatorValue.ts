import {AccessPackageAnswerChoice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAnswerChoiceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAnswerChoice {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAnswerChoice();
}
