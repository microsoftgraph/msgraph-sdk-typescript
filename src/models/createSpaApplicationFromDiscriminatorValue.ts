import { deserializeIntoSpaApplication } from './deserializeIntoSpaApplication';
import { type SpaApplication } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSpaApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSpaApplication;
}
