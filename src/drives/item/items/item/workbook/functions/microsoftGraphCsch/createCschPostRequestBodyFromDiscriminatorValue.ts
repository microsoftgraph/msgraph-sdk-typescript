import {CschPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCschPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CschPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CschPostRequestBody();
}
