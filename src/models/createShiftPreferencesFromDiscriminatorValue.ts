import { deserializeIntoShiftPreferences } from './deserializeIntoShiftPreferences';
import { type ShiftPreferences } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createShiftPreferencesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShiftPreferences;
}
