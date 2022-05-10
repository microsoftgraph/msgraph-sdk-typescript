import {PolicyBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PolicyBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PolicyBaseImpl();
}
