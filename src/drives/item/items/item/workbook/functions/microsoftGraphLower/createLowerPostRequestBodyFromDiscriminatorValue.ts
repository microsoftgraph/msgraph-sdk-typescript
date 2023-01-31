import {LowerPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLowerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LowerPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LowerPostRequestBody();
}
