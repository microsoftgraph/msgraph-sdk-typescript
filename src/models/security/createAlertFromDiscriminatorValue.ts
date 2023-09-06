import { deserializeIntoAlert } from './deserializeIntoAlert';
import { type Alert } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAlertFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlert;
}
