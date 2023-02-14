import {ProductPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProductPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProductPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProductPostRequestBody();
}
