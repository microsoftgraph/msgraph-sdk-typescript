import {MutePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MutePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MutePostRequestBody();
}
