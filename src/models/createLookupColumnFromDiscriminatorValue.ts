import {deserializeIntoLookupColumn} from './deserializeIntoLookupColumn';
import {LookupColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLookupColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLookupColumn;
}
