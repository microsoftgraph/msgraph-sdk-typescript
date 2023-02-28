import {UnicharPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnicharPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnicharPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnicharPostRequestBody();
}
