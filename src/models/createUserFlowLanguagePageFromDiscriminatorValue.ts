import {UserFlowLanguagePageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguagePageFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowLanguagePageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowLanguagePageImpl();
}
