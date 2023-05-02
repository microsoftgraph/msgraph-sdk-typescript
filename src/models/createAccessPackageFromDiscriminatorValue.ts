import {deserializeIntoAccessPackage} from './deserializeIntoAccessPackage';
import {AccessPackage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackage;
}
