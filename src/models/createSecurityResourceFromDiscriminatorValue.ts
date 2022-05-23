import {SecurityResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecurityResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecurityResourceImpl();
}
