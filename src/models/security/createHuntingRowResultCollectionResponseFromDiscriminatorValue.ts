import {HuntingRowResultCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHuntingRowResultCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : HuntingRowResultCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HuntingRowResultCollectionResponse();
}
