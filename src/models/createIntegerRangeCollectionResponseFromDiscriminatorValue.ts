import {IntegerRangeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntegerRangeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IntegerRangeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IntegerRangeCollectionResponse();
}
