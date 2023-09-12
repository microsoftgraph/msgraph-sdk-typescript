import { deserializeIntoUserFlowLanguageConfigurationCollectionResponse } from './deserializeIntoUserFlowLanguageConfigurationCollectionResponse';
import { type UserFlowLanguageConfigurationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFlowLanguageConfigurationCollectionResponse;
}
