import {SharedPCConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedPCConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedPCConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedPCConfigurationImpl();
}
