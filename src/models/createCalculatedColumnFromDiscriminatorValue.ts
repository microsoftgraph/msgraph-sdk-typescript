import {CalculatedColumnImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalculatedColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalculatedColumnImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalculatedColumnImpl();
}
