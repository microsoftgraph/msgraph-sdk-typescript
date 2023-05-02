import {deserializeIntoIdentityContainer} from './deserializeIntoIdentityContainer';
import {IdentityContainer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityContainer;
}
