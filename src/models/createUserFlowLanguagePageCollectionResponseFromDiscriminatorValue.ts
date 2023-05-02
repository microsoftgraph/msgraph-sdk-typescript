import {deserializeIntoUserFlowLanguagePageCollectionResponse} from './deserializeIntoUserFlowLanguagePageCollectionResponse';
import {UserFlowLanguagePageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFlowLanguagePageCollectionResponse;
}
