import {deserializeIntoAccessPackageSubject} from './deserializeIntoAccessPackageSubject';
import {AccessPackageSubject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageSubject;
}
