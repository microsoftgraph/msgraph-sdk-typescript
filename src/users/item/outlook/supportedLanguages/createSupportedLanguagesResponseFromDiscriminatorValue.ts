import { deserializeIntoSupportedLanguagesResponse } from './deserializeIntoSupportedLanguagesResponse';
import { type SupportedLanguagesResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSupportedLanguagesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSupportedLanguagesResponse;
}
