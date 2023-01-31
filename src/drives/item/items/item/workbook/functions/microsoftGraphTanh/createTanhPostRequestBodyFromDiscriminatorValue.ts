import {TanhPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTanhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TanhPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TanhPostRequestBody();
}
