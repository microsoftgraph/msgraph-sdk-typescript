import {AccessPackageSubjectImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageSubjectImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageSubjectImpl();
}
