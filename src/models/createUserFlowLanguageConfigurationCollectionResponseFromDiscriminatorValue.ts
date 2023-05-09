import {deserializeIntoUserFlowLanguageConfigurationCollectionResponse} from './deserializeIntoUserFlowLanguageConfigurationCollectionResponse';
import {UserFlowLanguageConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFlowLanguageConfigurationCollectionResponse;
}
