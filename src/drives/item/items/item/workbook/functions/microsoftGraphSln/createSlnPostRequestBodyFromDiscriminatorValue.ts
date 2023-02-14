import {SlnPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSlnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SlnPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SlnPostRequestBody();
}
