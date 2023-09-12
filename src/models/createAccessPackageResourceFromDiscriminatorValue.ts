import { deserializeIntoAccessPackageResource } from './deserializeIntoAccessPackageResource';
import { type AccessPackageResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResource;
}
