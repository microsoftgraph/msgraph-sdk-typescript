import {LenPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LenPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LenPostRequestBody();
}
