import {LocalizedNameImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedNameFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedNameImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedNameImpl();
}
