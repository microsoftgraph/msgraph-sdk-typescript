import {CothPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCothPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CothPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CothPostRequestBody();
}
