import {UserFlowLanguageConfigurationCollectionResponse} from './userFlowLanguageConfigurationCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowLanguageConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowLanguageConfigurationCollectionResponse();
}
