import { deserializeIntoWindowsWebApp } from './deserializeIntoWindowsWebApp';
import { type WindowsWebApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsWebAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsWebApp;
}
