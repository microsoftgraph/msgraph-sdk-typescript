import {IosCustomConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosCustomConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosCustomConfigurationImpl();
}
