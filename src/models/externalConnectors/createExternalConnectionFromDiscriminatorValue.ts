import {deserializeIntoExternalConnection} from './deserializeIntoExternalConnection';
import {ExternalConnection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalConnectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalConnection;
}
