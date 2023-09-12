import { deserializeIntoAccessPackageResourceEnvironment } from './deserializeIntoAccessPackageResourceEnvironment';
import { type AccessPackageResourceEnvironment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceEnvironmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceEnvironment;
}
