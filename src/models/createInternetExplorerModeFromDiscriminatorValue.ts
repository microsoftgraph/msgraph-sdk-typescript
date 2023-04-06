import {InternetExplorerMode} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInternetExplorerModeFromDiscriminatorValue(parseNode: ParseNode | undefined) : InternetExplorerMode {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InternetExplorerMode();
}
