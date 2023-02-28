import {CountIfsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountIfsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CountIfsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CountIfsPostRequestBody();
}
