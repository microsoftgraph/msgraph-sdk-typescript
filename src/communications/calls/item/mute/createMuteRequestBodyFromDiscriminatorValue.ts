import {MuteRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMuteRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MuteRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MuteRequestBodyImpl();
}
