import {Bundle} from './bundle';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBundleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bundle {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bundle();
}
