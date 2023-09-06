import { deserializeIntoEventQuery } from './deserializeIntoEventQuery';
import { type EventQuery } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEventQueryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventQuery;
}
