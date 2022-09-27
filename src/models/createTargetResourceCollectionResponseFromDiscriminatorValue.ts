import {TargetResourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetResourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetResourceCollectionResponse();
}
