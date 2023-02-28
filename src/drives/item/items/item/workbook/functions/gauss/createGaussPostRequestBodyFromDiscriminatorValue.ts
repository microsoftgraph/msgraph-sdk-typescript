import {GaussPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGaussPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GaussPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GaussPostRequestBody();
}
