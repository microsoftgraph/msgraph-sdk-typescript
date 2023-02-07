import {WindowsWebApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsWebAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsWebApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsWebApp();
}
