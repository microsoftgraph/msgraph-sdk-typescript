import {WebApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WebApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WebApp();
}
