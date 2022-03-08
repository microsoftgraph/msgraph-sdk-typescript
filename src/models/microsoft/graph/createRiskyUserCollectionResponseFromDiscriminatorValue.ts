import {RiskyUserCollectionResponse} from './riskyUserCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyUserCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyUserCollectionResponse();
}
