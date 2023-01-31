import {ImTanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImTanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImTanPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImTanPostRequestBody();
}
