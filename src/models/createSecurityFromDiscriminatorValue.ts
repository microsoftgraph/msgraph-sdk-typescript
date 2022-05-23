import {SecurityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecurityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecurityImpl();
}
