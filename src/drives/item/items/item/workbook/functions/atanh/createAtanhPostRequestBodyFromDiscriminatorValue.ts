import {AtanhPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAtanhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AtanhPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AtanhPostRequestBody();
}
