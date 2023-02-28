import {AcosPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcosPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AcosPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AcosPostRequestBody();
}
