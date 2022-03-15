import {TimeZoneBase} from './timeZoneBase';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeZoneBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeZoneBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeZoneBase();
}
