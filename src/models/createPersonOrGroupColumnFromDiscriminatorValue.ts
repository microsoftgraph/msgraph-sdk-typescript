import { deserializeIntoPersonOrGroupColumn } from './deserializeIntoPersonOrGroupColumn';
import { type PersonOrGroupColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPersonOrGroupColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPersonOrGroupColumn;
}
