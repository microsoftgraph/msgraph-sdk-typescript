import { deserializeIntoAccessPackageAnswerChoice } from './deserializeIntoAccessPackageAnswerChoice';
import { type AccessPackageAnswerChoice } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAnswerChoiceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAnswerChoice;
}
