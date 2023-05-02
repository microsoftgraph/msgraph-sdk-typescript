import {deserializeIntoBundle} from './deserializeIntoBundle';
import {Bundle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBundleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBundle;
}
