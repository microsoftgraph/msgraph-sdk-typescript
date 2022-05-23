import {LocationConstraintItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationConstraintItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocationConstraintItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocationConstraintItemImpl();
}
