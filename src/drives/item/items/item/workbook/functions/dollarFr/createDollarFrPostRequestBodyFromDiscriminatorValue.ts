import {DollarFrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDollarFrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DollarFrPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DollarFrPostRequestBody();
}
