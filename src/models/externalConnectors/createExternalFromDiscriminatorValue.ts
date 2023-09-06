import { deserializeIntoExternal } from './deserializeIntoExternal';
import { type External } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternal;
}
