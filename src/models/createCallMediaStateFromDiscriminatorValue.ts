import { deserializeIntoCallMediaState } from './deserializeIntoCallMediaState';
import { type CallMediaState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCallMediaStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallMediaState;
}
