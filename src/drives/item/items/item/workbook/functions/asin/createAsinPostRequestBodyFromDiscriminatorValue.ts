import {AsinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAsinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AsinPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AsinPostRequestBody();
}
