import {ControlScoreCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createControlScoreCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ControlScoreCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ControlScoreCollectionResponse();
}
