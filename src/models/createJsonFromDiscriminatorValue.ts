import { deserializeIntoJson } from './deserializeIntoJson';
import { type Json } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createJsonFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoJson;
}
