import {AtanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAtanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AtanPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AtanPostRequestBody();
}
