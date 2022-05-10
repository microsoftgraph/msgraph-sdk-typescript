import {ManagedAppRegistrationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppRegistrationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppRegistrationImpl();
}
