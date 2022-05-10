import {DeclineRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeclineRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeclineRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeclineRequestBodyImpl();
}
