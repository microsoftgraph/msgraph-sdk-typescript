import {PrintSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintSettingsImpl();
}
