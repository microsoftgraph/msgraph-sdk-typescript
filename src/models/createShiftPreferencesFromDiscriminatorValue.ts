import {deserializeIntoShiftPreferences} from './deserializeIntoShiftPreferences';
import {ShiftPreferences} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftPreferencesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShiftPreferences;
}
