import {DeclinePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeclinePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeclinePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeclinePostRequestBodyImpl();
}
