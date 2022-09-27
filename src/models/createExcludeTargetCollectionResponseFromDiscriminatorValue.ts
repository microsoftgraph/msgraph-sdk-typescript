import {ExcludeTargetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExcludeTargetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExcludeTargetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExcludeTargetCollectionResponse();
}
