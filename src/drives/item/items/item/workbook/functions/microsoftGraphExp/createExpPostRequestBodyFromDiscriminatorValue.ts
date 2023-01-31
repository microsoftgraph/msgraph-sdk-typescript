import {ExpPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExpPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExpPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExpPostRequestBody();
}
