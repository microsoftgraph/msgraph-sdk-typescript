import {SecPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecPostRequestBody();
}
