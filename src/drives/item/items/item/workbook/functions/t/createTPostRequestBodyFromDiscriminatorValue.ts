import {TPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TPostRequestBody();
}
