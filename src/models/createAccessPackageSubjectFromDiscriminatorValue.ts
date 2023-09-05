import { deserializeIntoAccessPackageSubject } from './deserializeIntoAccessPackageSubject';
import { type AccessPackageSubject } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageSubject;
}
