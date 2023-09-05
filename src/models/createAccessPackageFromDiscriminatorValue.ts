import { deserializeIntoAccessPackage } from './deserializeIntoAccessPackage';
import { type AccessPackage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackage;
}
