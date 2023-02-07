import {DollarPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDollarPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DollarPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DollarPostRequestBody();
}
