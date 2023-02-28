import {LnPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LnPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LnPostRequestBody();
}
