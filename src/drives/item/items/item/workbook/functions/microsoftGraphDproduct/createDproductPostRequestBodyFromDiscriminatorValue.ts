import {DproductPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDproductPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DproductPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DproductPostRequestBody();
}
