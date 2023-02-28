import {TruncPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTruncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TruncPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TruncPostRequestBody();
}
