import {LocationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocationImpl();
}
