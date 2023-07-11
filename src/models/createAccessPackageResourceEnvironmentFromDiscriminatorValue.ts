import {deserializeIntoAccessPackageResourceEnvironment} from './deserializeIntoAccessPackageResourceEnvironment';
import {AccessPackageResourceEnvironment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceEnvironmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceEnvironment;
}
