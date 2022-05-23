import {UserFlowLanguagePageCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowLanguagePageCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowLanguagePageCollectionResponseImpl();
}
