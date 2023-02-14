import {AmorDegrcPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAmorDegrcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AmorDegrcPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AmorDegrcPostRequestBody();
}
