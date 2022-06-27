import {CustomTimeZoneImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomTimeZoneFromDiscriminatorValue(parseNode: ParseNode | undefined) : CustomTimeZoneImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CustomTimeZoneImpl();
}
