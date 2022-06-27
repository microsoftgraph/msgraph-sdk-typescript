import {Win32LobAppProductCodeRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppProductCodeRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppProductCodeRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppProductCodeRuleImpl();
}
