import {TypePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTypePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TypePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TypePostRequestBody();
}
