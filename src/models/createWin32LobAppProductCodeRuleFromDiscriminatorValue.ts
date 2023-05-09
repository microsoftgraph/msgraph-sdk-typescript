import {deserializeIntoWin32LobAppProductCodeRule} from './deserializeIntoWin32LobAppProductCodeRule';
import {Win32LobAppProductCodeRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppProductCodeRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppProductCodeRule;
}
