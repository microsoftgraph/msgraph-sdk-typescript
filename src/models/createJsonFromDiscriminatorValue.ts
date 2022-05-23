import {JsonImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createJsonFromDiscriminatorValue(parseNode: ParseNode | undefined) : JsonImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new JsonImpl();
}
