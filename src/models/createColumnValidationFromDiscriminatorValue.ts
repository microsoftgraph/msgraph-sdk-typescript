import {ColumnValidationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnValidationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ColumnValidationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ColumnValidationImpl();
}
