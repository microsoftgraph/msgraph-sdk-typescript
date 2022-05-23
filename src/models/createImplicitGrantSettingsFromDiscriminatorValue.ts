import {ImplicitGrantSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImplicitGrantSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImplicitGrantSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImplicitGrantSettingsImpl();
}
