import {LocationConstraintImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationConstraintFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocationConstraintImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocationConstraintImpl();
}
