import {PackageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPackageFromDiscriminatorValue(parseNode: ParseNode | undefined) : PackageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PackageImpl();
}
