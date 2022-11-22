import {ScoredEmailAddressCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScoredEmailAddressCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScoredEmailAddressCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScoredEmailAddressCollectionResponse();
}
