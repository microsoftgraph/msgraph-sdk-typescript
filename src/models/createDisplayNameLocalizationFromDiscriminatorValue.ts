import {DisplayNameLocalizationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDisplayNameLocalizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DisplayNameLocalizationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DisplayNameLocalizationImpl();
}
