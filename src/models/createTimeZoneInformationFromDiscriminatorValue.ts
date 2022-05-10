import {TimeZoneInformationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeZoneInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeZoneInformationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeZoneInformationImpl();
}
