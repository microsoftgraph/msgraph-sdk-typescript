import {Z_TestPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createZ_TestPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Z_TestPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Z_TestPostRequestBody();
}
