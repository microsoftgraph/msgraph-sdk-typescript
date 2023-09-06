import { deserializeIntoUserFlowLanguageConfiguration } from './deserializeIntoUserFlowLanguageConfiguration';
import { type UserFlowLanguageConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserFlowLanguageConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFlowLanguageConfiguration;
}
