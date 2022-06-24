import {WebAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WebAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WebAppImpl();
}
