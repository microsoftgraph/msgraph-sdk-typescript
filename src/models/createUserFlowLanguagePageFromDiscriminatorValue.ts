import { deserializeIntoUserFlowLanguagePage } from './deserializeIntoUserFlowLanguagePage';
import { type UserFlowLanguagePage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserFlowLanguagePageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFlowLanguagePage;
}
