import {deserializeIntoPackageEscaped} from './deserializeIntoPackageEscaped';
import {PackageEscaped} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPackageEscapedFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPackageEscaped;
}
