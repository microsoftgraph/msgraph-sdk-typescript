import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguagePageFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowLanguagePage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowLanguagePage();
}
