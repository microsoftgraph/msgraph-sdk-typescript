import {RetentionEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetentionEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : RetentionEvent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RetentionEvent();
}
