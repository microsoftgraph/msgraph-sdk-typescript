import {WindowsMicrosoftEdgeApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMicrosoftEdgeAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsMicrosoftEdgeApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsMicrosoftEdgeApp();
}
