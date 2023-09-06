import { deserializeIntoWebApp } from './deserializeIntoWebApp';
import { type WebApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWebAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWebApp;
}
