import {StsPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StsPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StsPolicyImpl();
}
