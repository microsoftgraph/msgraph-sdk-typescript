import { deserializeIntoSharepoint } from './deserializeIntoSharepoint';
import { type Sharepoint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharepointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharepoint;
}
