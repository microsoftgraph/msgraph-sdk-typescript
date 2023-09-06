import { deserializeIntoAccessPackageAnswerString } from './deserializeIntoAccessPackageAnswerString';
import { type AccessPackageAnswerString } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAnswerStringFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAnswerString;
}
