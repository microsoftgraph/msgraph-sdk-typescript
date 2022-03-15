import {CallMediaState} from './callMediaState';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallMediaStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallMediaState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallMediaState();
}
