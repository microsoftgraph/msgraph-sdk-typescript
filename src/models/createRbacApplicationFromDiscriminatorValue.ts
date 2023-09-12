import { deserializeIntoRbacApplication } from './deserializeIntoRbacApplication';
import { type RbacApplication } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRbacApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRbacApplication;
}
