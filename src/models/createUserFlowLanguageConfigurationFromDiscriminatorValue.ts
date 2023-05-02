import {deserializeIntoUserFlowLanguageConfiguration} from './deserializeIntoUserFlowLanguageConfiguration';
import {UserFlowLanguageConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguageConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFlowLanguageConfiguration;
}
