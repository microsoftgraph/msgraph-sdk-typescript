import {RecurrencePatternImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurrencePatternFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecurrencePatternImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecurrencePatternImpl();
}
