import { deserializeIntoHostComponent } from './deserializeIntoHostComponent';
import { type HostComponent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostComponentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostComponent;
}
