import {UserFlowLanguageConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguageConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowLanguageConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowLanguageConfigurationImpl();
}
