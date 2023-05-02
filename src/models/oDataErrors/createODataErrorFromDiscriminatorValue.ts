import {deserializeIntoODataError} from './deserializeIntoODataError';
import {ODataError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createODataErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoODataError;
}
