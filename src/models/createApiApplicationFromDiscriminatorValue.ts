import { deserializeIntoApiApplication } from './deserializeIntoApiApplication';
import { type ApiApplication } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApiApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApiApplication;
}
