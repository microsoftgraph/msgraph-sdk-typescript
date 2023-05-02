import {deserializeIntoApiApplication} from './deserializeIntoApiApplication';
import {ApiApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApiApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApiApplication;
}
