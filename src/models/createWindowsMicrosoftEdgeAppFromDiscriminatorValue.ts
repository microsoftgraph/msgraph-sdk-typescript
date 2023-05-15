import {deserializeIntoWindowsMicrosoftEdgeApp} from './deserializeIntoWindowsMicrosoftEdgeApp';
import {WindowsMicrosoftEdgeApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMicrosoftEdgeAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsMicrosoftEdgeApp;
}
