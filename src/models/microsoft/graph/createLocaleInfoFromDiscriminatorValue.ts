import {LocaleInfo} from './localeInfo';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocaleInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocaleInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocaleInfo();
}
