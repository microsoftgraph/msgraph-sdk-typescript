import {DollarDePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDollarDePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DollarDePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DollarDePostRequestBody();
}
