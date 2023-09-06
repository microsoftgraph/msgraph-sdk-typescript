import { deserializeIntoWindowsMicrosoftEdgeApp } from './deserializeIntoWindowsMicrosoftEdgeApp';
import { type WindowsMicrosoftEdgeApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsMicrosoftEdgeAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsMicrosoftEdgeApp;
}
