import {ImSecPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImSecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImSecPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImSecPostRequestBody();
}
