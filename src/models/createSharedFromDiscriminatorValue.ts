import {deserializeIntoShared} from './deserializeIntoShared';
import {Shared} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShared;
}
