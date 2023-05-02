import {deserializeIntoLocaleInfo} from './deserializeIntoLocaleInfo';
import {LocaleInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocaleInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocaleInfo;
}
