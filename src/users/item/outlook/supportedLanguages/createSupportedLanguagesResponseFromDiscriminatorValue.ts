import {deserializeIntoSupportedLanguagesResponse} from './deserializeIntoSupportedLanguagesResponse';
import {SupportedLanguagesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportedLanguagesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSupportedLanguagesResponse;
}
