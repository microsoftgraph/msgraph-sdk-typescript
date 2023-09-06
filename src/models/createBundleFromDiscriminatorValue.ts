import { deserializeIntoBundle } from './deserializeIntoBundle';
import { type Bundle } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBundleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBundle;
}
