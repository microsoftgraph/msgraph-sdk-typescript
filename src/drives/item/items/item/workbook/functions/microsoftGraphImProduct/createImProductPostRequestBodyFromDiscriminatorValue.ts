import {ImProductPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImProductPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImProductPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImProductPostRequestBody();
}
