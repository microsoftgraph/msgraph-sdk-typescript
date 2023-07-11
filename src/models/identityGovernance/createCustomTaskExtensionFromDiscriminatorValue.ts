import {deserializeIntoCustomTaskExtension} from './deserializeIntoCustomTaskExtension';
import {CustomTaskExtension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomTaskExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomTaskExtension;
}
