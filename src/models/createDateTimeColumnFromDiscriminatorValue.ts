import {DateTimeColumnImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDateTimeColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : DateTimeColumnImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DateTimeColumnImpl();
}
