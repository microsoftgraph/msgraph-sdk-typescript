import { deserializeIntoVppToken } from './deserializeIntoVppToken';
import { type VppToken } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVppTokenFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVppToken;
}
