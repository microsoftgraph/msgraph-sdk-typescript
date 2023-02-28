import {SydPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSydPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SydPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SydPostRequestBody();
}
