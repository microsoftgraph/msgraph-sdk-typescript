import {AcothPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcothPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AcothPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AcothPostRequestBody();
}
