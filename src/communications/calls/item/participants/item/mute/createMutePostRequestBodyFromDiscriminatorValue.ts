import {MutePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MutePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MutePostRequestBodyImpl();
}
