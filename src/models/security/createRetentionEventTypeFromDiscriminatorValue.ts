import {RetentionEventType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetentionEventTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : RetentionEventType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RetentionEventType();
}
