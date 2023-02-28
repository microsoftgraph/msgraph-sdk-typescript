import {DcountPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDcountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DcountPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DcountPostRequestBody();
}
