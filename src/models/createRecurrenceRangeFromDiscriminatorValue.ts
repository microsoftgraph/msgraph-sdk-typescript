import {RecurrenceRangeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurrenceRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecurrenceRangeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecurrenceRangeImpl();
}
