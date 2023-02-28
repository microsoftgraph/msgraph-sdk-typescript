import {LargePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLargePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LargePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LargePostRequestBody();
}
