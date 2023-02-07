import {ReplaceBPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplaceBPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplaceBPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplaceBPostRequestBody();
}
