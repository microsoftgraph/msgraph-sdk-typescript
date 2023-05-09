import {deserializeIntoCallMediaState} from './deserializeIntoCallMediaState';
import {CallMediaState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallMediaStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallMediaState;
}
