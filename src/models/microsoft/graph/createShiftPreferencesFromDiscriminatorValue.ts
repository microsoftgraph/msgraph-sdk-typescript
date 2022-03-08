import {ShiftPreferences} from './shiftPreferences';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftPreferencesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftPreferences {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftPreferences();
}
