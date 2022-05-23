import {UserFlowLanguageConfigurationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowLanguageConfigurationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowLanguageConfigurationCollectionResponseImpl();
}
