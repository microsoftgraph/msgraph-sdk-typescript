import {DmaxPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDmaxPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DmaxPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DmaxPostRequestBody();
}
