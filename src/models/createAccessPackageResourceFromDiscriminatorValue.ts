import {deserializeIntoAccessPackageResource} from './deserializeIntoAccessPackageResource';
import {AccessPackageResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResource;
}
