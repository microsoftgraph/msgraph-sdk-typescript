import {deserializeIntoInnerError} from './deserializeIntoInnerError';
import {InnerError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInnerErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInnerError;
}
