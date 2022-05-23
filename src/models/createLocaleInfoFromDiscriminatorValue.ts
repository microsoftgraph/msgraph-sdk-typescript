import {LocaleInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocaleInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocaleInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocaleInfoImpl();
}
