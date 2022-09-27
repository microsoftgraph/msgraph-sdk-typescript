import {IosVppAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosVppAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosVppAppCollectionResponse();
}
