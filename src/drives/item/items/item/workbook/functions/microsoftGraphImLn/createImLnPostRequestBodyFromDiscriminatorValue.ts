import {ImLnPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImLnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImLnPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImLnPostRequestBody();
}
