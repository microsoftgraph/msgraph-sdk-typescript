import {SetOrderPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetOrderPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetOrderPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetOrderPostRequestBodyImpl();
}
