import { deserializeIntoUserFlowLanguagePageCollectionResponse } from './deserializeIntoUserFlowLanguagePageCollectionResponse';
import { type UserFlowLanguagePageCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFlowLanguagePageCollectionResponse;
}
