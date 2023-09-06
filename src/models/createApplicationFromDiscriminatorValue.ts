import { deserializeIntoApplication } from './deserializeIntoApplication';
import { type Application } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplication;
}
