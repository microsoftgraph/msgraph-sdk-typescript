import {BundleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBundleFromDiscriminatorValue(parseNode: ParseNode | undefined) : BundleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BundleImpl();
}
