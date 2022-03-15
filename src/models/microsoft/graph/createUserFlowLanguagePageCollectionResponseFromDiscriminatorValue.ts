import {UserFlowLanguagePageCollectionResponse} from './userFlowLanguagePageCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowLanguagePageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowLanguagePageCollectionResponse();
}
