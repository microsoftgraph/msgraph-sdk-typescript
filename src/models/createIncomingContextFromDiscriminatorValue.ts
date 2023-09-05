import { deserializeIntoIncomingContext } from './deserializeIntoIncomingContext';
import { type IncomingContext } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIncomingContextFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIncomingContext;
}
