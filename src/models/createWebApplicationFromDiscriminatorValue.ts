import {WebApplicationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WebApplicationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WebApplicationImpl();
}
