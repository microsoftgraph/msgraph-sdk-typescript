import {AccessPackageAnswerString} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAnswerStringFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAnswerString {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAnswerString();
}
