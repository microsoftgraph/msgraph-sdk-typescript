import {deserializeIntoPublicError} from './deserializeIntoPublicError';
import {PublicError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPublicError;
}
