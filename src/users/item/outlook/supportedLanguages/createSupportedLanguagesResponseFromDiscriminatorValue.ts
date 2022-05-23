import {SupportedLanguagesResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportedLanguagesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SupportedLanguagesResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SupportedLanguagesResponseImpl();
}
