import {SinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SinPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SinPostRequestBody();
}
