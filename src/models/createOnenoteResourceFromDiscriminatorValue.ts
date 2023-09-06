import { deserializeIntoOnenoteResource } from './deserializeIntoOnenoteResource';
import { type OnenoteResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenoteResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteResource;
}
