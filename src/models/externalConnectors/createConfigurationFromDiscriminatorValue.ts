import {ConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationImpl();
}
