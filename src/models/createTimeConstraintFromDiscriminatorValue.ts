import {TimeConstraintImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeConstraintFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeConstraintImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeConstraintImpl();
}
