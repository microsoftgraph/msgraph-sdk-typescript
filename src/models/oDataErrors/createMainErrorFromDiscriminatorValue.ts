import {deserializeIntoMainError} from './deserializeIntoMainError';
import {MainError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMainErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMainError;
}
