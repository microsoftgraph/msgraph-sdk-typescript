import {ShiftPreferencesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftPreferencesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftPreferencesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftPreferencesImpl();
}
