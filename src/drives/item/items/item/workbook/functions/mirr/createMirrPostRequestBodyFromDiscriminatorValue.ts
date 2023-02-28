import {MirrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMirrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MirrPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MirrPostRequestBody();
}
