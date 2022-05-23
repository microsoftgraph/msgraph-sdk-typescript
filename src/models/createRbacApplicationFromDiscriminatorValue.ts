import {RbacApplicationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRbacApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : RbacApplicationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RbacApplicationImpl();
}
