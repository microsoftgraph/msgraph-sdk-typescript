import { deserializeIntoFreeBusyError } from './deserializeIntoFreeBusyError';
import { type FreeBusyError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFreeBusyErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFreeBusyError;
}
